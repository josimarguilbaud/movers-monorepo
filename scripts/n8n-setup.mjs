#!/usr/bin/env node
/* ============================================================================
   Deja los dos flujos de lead montados y activos en n8n, sin clics.

   Las credenciales se leen del ENTORNO y nunca se escriben a disco, ni se
   imprimen, ni se guardan en el repo. Este archivo no contiene ninguna.

   USO
   ---
   Windows PowerShell:
     $env:N8N_URL       = "https://n8n.aiwebstudio.co"
     $env:N8N_API_KEY   = "<tu token de n8n>"
     $env:SMTP_USER     = "<login SMTP de Brevo>"
     $env:SMTP_PASSWORD = "<SMTP key de Brevo>"
     node scripts/n8n-setup.mjs              # simulacro, no cambia nada
     node scripts/n8n-setup.mjs --apply      # ejecuta de verdad

   Git Bash / Linux / macOS:
     export N8N_URL=https://n8n.aiwebstudio.co
     export N8N_API_KEY='...'
     export SMTP_USER='...'
     export SMTP_PASSWORD='...'
     node scripts/n8n-setup.mjs --apply

   QUÉ HACE, EN ORDEN
   ------------------
   1. Comprueba que el token sirve.
   2. Crea la credencial SMTP "SMTP Brevo" (o usa la que le pases por
      --credential-id si ya la creaste a mano).
   3. Detecta flujos existentes que usen los paths /pim-lead o /pwe-lead.
   4. Desactiva el flujo viejo de PIM. Sin esto el nuevo NO puede activarse:
      n8n no permite dos webhooks activos en la misma ruta.
   5. Importa pim-lead-workflow.json y pwe-lead-workflow.json con la credencial
      ya asignada a sus nodos de email.
   6. Los activa.
   7. Verifica que los dos webhooks respondan como registrados.

   El paso 4 es el único destructivo, y no borra nada: solo desactiva. El flujo
   viejo queda en n8n por si hay que volver atrás.
   ========================================================================== */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPLY = process.argv.includes('--apply');
const CRED_ID_ARG = (process.argv.find((a) => a.startsWith('--credential-id=')) || '').split('=')[1];

const {
  N8N_URL = 'https://n8n.aiwebstudio.co',
  N8N_API_KEY,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_HOST = 'smtp-relay.brevo.com',
  SMTP_PORT = '587',
} = process.env;

const CRED_NOMBRE = 'SMTP Brevo';
const FLUJOS = [
  { archivo: 'pim-lead-workflow.json', path: 'pim-lead', etiqueta: 'PIM' },
  { archivo: 'pwe-lead-workflow.json', path: 'pwe-lead', etiqueta: 'PWE' },
];

const c = { ok: '\x1b[32m', no: '\x1b[31m', dim: '\x1b[2m', b: '\x1b[1m', x: '\x1b[0m' };
const log = (m = '') => console.log(m);
const paso = (n, m) => log(`\n${c.b}[${n}]${c.x} ${m}`);
const ok = (m) => log(`  ${c.ok}OK${c.x}   ${m}`);
const info = (m) => log(`  ${c.dim}·${c.x}    ${m}`);
const err = (m) => log(`  ${c.no}FALLO${c.x} ${m}`);

/* --- comprobaciones previas ------------------------------------------- */

const faltan = [];
if (!N8N_API_KEY) faltan.push('N8N_API_KEY');
if (!CRED_ID_ARG) {
  if (!SMTP_USER) faltan.push('SMTP_USER');
  if (!SMTP_PASSWORD) faltan.push('SMTP_PASSWORD');
}
if (faltan.length) {
  err(`Faltan variables de entorno: ${faltan.join(', ')}`);
  log(`\n  Si ya creaste la credencial a mano en n8n, puedes saltarte SMTP_USER y`);
  log(`  SMTP_PASSWORD pasando su id:  node scripts/n8n-setup.mjs --credential-id=XXX --apply\n`);
  process.exit(1);
}

async function api(ruta, opciones = {}) {
  const r = await fetch(`${N8N_URL}/api/v1${ruta}`, {
    ...opciones,
    headers: {
      'X-N8N-API-KEY': N8N_API_KEY,
      'Content-Type': 'application/json',
      ...(opciones.headers || {}),
    },
  });
  const texto = await r.text();
  let cuerpo;
  try { cuerpo = texto ? JSON.parse(texto) : null; } catch { cuerpo = texto; }
  if (!r.ok) {
    const msg = typeof cuerpo === 'object' ? JSON.stringify(cuerpo) : String(cuerpo).slice(0, 300);
    throw new Error(`${r.status} ${ruta} -> ${msg}`);
  }
  return cuerpo;
}

/* --- 1. token ---------------------------------------------------------- */

paso(1, 'Comprobando el acceso a n8n');
let existentes;
try {
  const r = await api('/workflows?limit=250');
  existentes = r.data || [];
  ok(`Conectado a ${N8N_URL}. ${existentes.length} flujos en la instancia.`);
} catch (e) {
  err(e.message);
  log(`\n  Si dice 401: el token está vencido o mal copiado. Genera otro en`);
  log(`  n8n -> Settings -> API.\n`);
  process.exit(1);
}

/* --- 2. credencial ----------------------------------------------------- */

paso(2, 'Credencial SMTP');
let credId = CRED_ID_ARG;
if (credId) {
  ok(`Usando la credencial que indicaste: ${credId}`);
} else if (!APPLY) {
  info(`Se crearía la credencial "${CRED_NOMBRE}" (${SMTP_HOST}:${SMTP_PORT}, usuario ${SMTP_USER})`);
  credId = '<pendiente>';
} else {
  try {
    const cred = await api('/credentials', {
      method: 'POST',
      body: JSON.stringify({
        name: CRED_NOMBRE,
        type: 'smtp',
        data: {
          user: SMTP_USER,
          password: SMTP_PASSWORD,
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: false,
          disableStartTls: false,
        },
      }),
    });
    credId = cred.id;
    ok(`Credencial "${CRED_NOMBRE}" creada con id ${credId}`);
  } catch (e) {
    err(e.message);
    log(`\n  La API pública de n8n no permite listar credenciales, así que si ya`);
    log(`  existe una con ese nombre esto puede fallar o duplicarla. En ese caso,`);
    log(`  abre la credencial en n8n, copia su id de la URL y reejecuta con`);
    log(`  --credential-id=<id>\n`);
    process.exit(1);
  }
}

/* --- 3 y 4. flujos que ocupan los paths -------------------------------- */

paso(3, 'Buscando flujos que ya ocupen esos webhooks');
const pathDe = (wf) => wf.nodes?.find((n) => n.type === 'n8n-nodes-base.webhook')?.parameters?.path;
const detallados = [];
for (const wf of existentes) {
  try {
    detallados.push(await api(`/workflows/${wf.id}`));
  } catch { /* sin permiso para leerlo, se ignora */ }
}
const chocan = detallados.filter((wf) => FLUJOS.some((f) => pathDe(wf) === f.path));

if (!chocan.length) {
  ok('Ningún flujo existente usa /pim-lead ni /pwe-lead.');
} else {
  for (const wf of chocan) {
    info(`"${wf.name}" (id ${wf.id}) usa /${pathDe(wf)} · ${wf.active ? 'ACTIVO' : 'inactivo'}`);
  }
}

paso(4, 'Desactivando los flujos que chocan');
const aDesactivar = chocan.filter((w) => w.active);
if (!aDesactivar.length) {
  ok('Nada que desactivar.');
} else {
  for (const wf of aDesactivar) {
    if (!APPLY) { info(`Se desactivaría "${wf.name}" (${wf.id}). No se borra.`); continue; }
    await api(`/workflows/${wf.id}/deactivate`, { method: 'POST' });
    ok(`Desactivado "${wf.name}" (${wf.id}). Sigue en n8n por si hay que volver.`);
  }
}

/* --- 5 y 6. importar y activar ----------------------------------------- */

paso(5, 'Importando y activando los flujos nuevos');
const creados = [];
for (const f of FLUJOS) {
  const wf = JSON.parse(readFileSync(join(RAIZ, f.archivo), 'utf8'));

  // asignar la credencial real a cada nodo de email
  let nodosTocados = 0;
  for (const n of wf.nodes) {
    if (n.type === 'n8n-nodes-base.emailSend') {
      n.credentials = { smtp: { id: credId, name: CRED_NOMBRE } };
      nodosTocados++;
    }
  }

  // la API rechaza campos de solo lectura
  const cuerpo = { name: wf.name, nodes: wf.nodes, connections: wf.connections, settings: wf.settings || {} };

  if (!APPLY) {
    info(`Se crearía "${wf.name}" con ${wf.nodes.length} nodos, credencial en ${nodosTocados} nodos de email, y se activaría.`);
    continue;
  }

  try {
    const creado = await api('/workflows', { method: 'POST', body: JSON.stringify(cuerpo) });
    await api(`/workflows/${creado.id}/activate`, { method: 'POST' });
    creados.push({ ...f, id: creado.id });
    ok(`${f.etiqueta}: "${wf.name}" creado (${creado.id}) y ACTIVADO.`);
  } catch (e) {
    err(`${f.etiqueta}: ${e.message}`);
  }
}

/* --- 7. verificación --------------------------------------------------- */

paso(6, 'Verificando los webhooks');
if (!APPLY) {
  info('Simulacro: no se verifica nada porque no se cambió nada.');
  log(`\n${c.b}Esto fue un simulacro.${c.x} Para ejecutarlo de verdad:\n`);
  log(`  node scripts/n8n-setup.mjs --apply\n`);
  process.exit(0);
}

for (const f of FLUJOS) {
  const r = await fetch(`${N8N_URL}/webhook/${f.path}`);
  const t = await r.text();
  // n8n responde distinto si existe (pide POST) o si no existe
  const registrado = /not registered for GET|Did you mean to make a POST/i.test(t);
  registrado
    ? ok(`${f.etiqueta}: /webhook/${f.path} responde como registrado.`)
    : err(`${f.etiqueta}: /webhook/${f.path} sigue sin registrar. Revisa que el flujo quedó activo.`);
}

log(`\n${c.b}Siguiente paso:${c.x} envía los dos formularios desde el sitio y confirma que`);
log(`llega el aviso al buzón del cliente, tu copia oculta, y la autorespuesta.\n`);
