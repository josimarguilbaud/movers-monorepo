#!/usr/bin/env node
/* ============================================================================
   Deja los dos flujos de lead montados y activos en n8n, sin clics.

   Las credenciales se leen del ENTORNO y nunca se escriben a disco, ni se
   imprimen, ni se guardan en el repo. Este archivo no contiene ninguna.

   USO
   ---
   No hace falta preparar nada. El script pregunta lo que necesita:

     node scripts/n8n-setup.mjs              # simulacro, no cambia nada
     node scripts/n8n-setup.mjs --apply      # ejecuta de verdad

   Pide el token de la API de n8n y el usuario y clave SMTP de Brevo. La clave
   no se ve al escribirla. Nada de eso queda en el historial del shell.

   Si prefieres no teclearlos, acepta las variables de entorno N8N_API_KEY,
   SMTP_USER y SMTP_PASSWORD, y solo pregunta las que falten.

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
import { createInterface } from 'node:readline/promises';

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

/* Pregunta un valor por consola. Si `oculto`, no se ve al escribir, así la
   contraseña tampoco queda a la vista de nadie que mire la pantalla.
   Preguntar es mejor que usar variables de entorno: no quedan en el historial
   del shell y no hay marcadores de ejemplo que copiar por error. */
async function preguntar(texto, oculto = false) {
  if (!oculto) {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    const r = await rl.question(texto);
    rl.close();
    return r.trim();
  }

  /* Para ocultar hay que leer en modo raw y pintar los asteriscos a mano.
     Interceptar readline no basta: al PEGAR, la terminal hace eco del texto
     antes de que el filtro llegue a verlo, y la clave termina impresa en
     pantalla. En modo raw ese eco no ocurre.
     El chunk se recorre carácter a carácter porque un pegado llega entero,
     con su salto de línea incluido, en un solo evento. */
  /* Sin terminal real (entrada canalizada, CI) no se puede desactivar el eco.
     Mejor avisar que dejar creer que la clave va oculta cuando no lo va. */
  if (!process.stdin.isTTY) {
    err('Sin terminal interactiva no se puede ocultar lo que escribes.');
    log('  Ejecuta el script directamente en tu terminal, sin canalizar la entrada,');
    log('  o pasa la clave por la variable de entorno SMTP_PASSWORD.\n');
    process.exit(1);
  }

  return new Promise((resolve) => {
    const stdin = process.stdin;
    const eraRaw = stdin.isRaw;
    process.stdout.write(texto);
    if (stdin.isTTY) stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    let valor = '';
    const terminar = () => {
      if (stdin.isTTY) stdin.setRawMode(eraRaw);
      stdin.pause();
      stdin.removeListener('data', onData);
      process.stdout.write('\n');
      resolve(valor.trim());
    };

    const onData = (chunk) => {
      for (const ch of chunk) {
        if (ch === '\r' || ch === '\n' || ch === '\u0004') return terminar();
        if (ch === '\u0003') { process.stdout.write('\n'); process.exit(1); }   // Ctrl+C
        if (ch === '\u007f' || ch === '\b') {                                   // borrar
          if (valor.length) { valor = valor.slice(0, -1); process.stdout.write('\b \b'); }
          continue;
        }
        if (ch < ' ') continue;                                                 // ignora control
        valor += ch;
        process.stdout.write('*');
      }
    };
    stdin.on('data', onData);
  });
}

/* Detecta que se pegó el texto de ejemplo en vez del valor real: corchetes,
   flechas de la documentación, o frases del propio instructivo. */
const esEjemplo = (v) => /[<>]|→|tu token|tu login|tu smtp|el que sale|esa misma pantalla|el token completo/i.test(v);

async function obtener(nombre, valorEnv, enunciado, oculto = false) {
  let v = (valorEnv || '').trim();
  if (v && !esEjemplo(v)) return v;
  if (v && esEjemplo(v)) {
    err(`${nombre} traía el texto de ejemplo, no el valor real. Te lo pido aquí.`);
  }
  while (true) {
    v = await preguntar(enunciado, oculto);
    if (!v) { err('No puede quedar vacío.'); continue; }
    if (esEjemplo(v)) { err('Eso sigue siendo el texto de ejemplo. Pega el valor real.'); continue; }
    return v;
  }
}

log(`\n${c.b}Configuración de los flujos de lead en n8n${c.x}`);
log(`${c.dim}Lo que escribas aquí no se guarda en ningún archivo ni queda en el historial.${c.x}`);

/* Este script es interactivo. Con la entrada canalizada, readline se traga todo
   el buffer en la primera pregunta y además no se puede desactivar el eco, así
   que la clave acabaría impresa. Se corta antes de que eso pase. */
if (!process.stdin.isTTY && !(N8N_API_KEY && (CRED_ID_ARG || (SMTP_USER && SMTP_PASSWORD)))) {
  err('Hace falta una terminal interactiva para pedir los datos.');
  log('\n  Ejecútalo directamente en tu terminal, sin canalizar la entrada.');
  log('  Para uso automatizado, define N8N_API_KEY, SMTP_USER y SMTP_PASSWORD\n');
  process.exit(1);
}

const API_KEY = await obtener(
  'N8N_API_KEY',
  N8N_API_KEY,
  '\n  Token de la API de n8n (Settings -> API): '
);

if (API_KEY.split('.').length !== 3) {
  err('Eso no tiene forma de token de n8n: debería ser un JWT, con dos puntos separando tres bloques.');
  log(`\n  Genera uno en n8n -> Settings -> API -> Create an API key.\n`);
  process.exit(1);
}

let USUARIO = SMTP_USER;
let CLAVE = SMTP_PASSWORD;
let HOST = SMTP_HOST;
let PUERTO = Number(SMTP_PORT);

if (!CRED_ID_ARG) {
  /* Dos caminos posibles y hay que elegir uno a conciencia:

     A) Brevo como relay. Firma con el DKIM del dominio verificado en Brevo,
        que es lo que saca los correos del spam. Usuario y clave salen de
        Brevo -> SMTP & API -> pestaña SMTP, y NO son el correo y contraseña
        de la cuenta de Brevo, ni la API key xkeysib-...

     B) El SMTP del propio hosting donde vive el buzón. Funciona, pero el
        correo deja de pasar por Brevo, así que se pierde su DKIM y la
        entregabilidad queda atada a la reputación del servidor del hosting,
        normalmente compartido. Es el problema que teníamos al principio. */
  log(`\n${c.b}  ¿Por dónde salen los correos?${c.x}`);
  log(`${c.dim}    1) Brevo   (recomendado: usa el DKIM del dominio ya verificado)`);
  log(`    2) El SMTP de tu hosting  (pierde el DKIM de Brevo)${c.x}`);
  const via = (await preguntar('\n  Elige 1 o 2 [1]: ')) || '1';

  if (via === '2') {
    log(`\n${c.dim}  Datos del servidor de correo de tu hosting. Suelen estar en el panel,`);
    log(`  en la sección de cuentas de correo, como "configurar cliente".${c.x}`);
    HOST = await obtener('SMTP_HOST', null, '\n  Servidor SMTP (ej. mail.mailweb.site): ');
    PUERTO = Number((await preguntar('  Puerto [587]: ')) || '587');
    USUARIO = await obtener('SMTP_USER', null, '  Usuario (normalmente el correo completo): ');
    CLAVE = await obtener('SMTP_PASSWORD', null, '  Contraseña del buzón (no se verá): ', true);
    log(`\n  ${c.no}Aviso${c.x}: enviando por el hosting no se aplica el DKIM de Brevo.`);
    log(`  Si los correos empiezan a caer en spam, esta es la causa a revisar primero.`);
  } else {
    log(`\n${c.dim}  Los dos siguientes salen de Brevo -> SMTP & API -> pestaña SMTP.`);
    log(`  No son el correo y contraseña de tu cuenta de Brevo, ni la API key.${c.x}`);
    USUARIO = await obtener('SMTP_USER', SMTP_USER, '\n  Usuario SMTP de Brevo: ');
    CLAVE = await obtener('SMTP_PASSWORD', SMTP_PASSWORD, '  Clave SMTP de Brevo (no se verá): ', true);
  }
}

async function api(ruta, opciones = {}) {
  const r = await fetch(`${N8N_URL}/api/v1${ruta}`, {
    ...opciones,
    headers: {
      'X-N8N-API-KEY': API_KEY,
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
  info(`Se crearía la credencial "${CRED_NOMBRE}" (${HOST}:${PUERTO}, usuario ${USUARIO})`);
  credId = '<pendiente>';
} else {
  try {
    const cred = await api('/credentials', {
      method: 'POST',
      body: JSON.stringify({
        name: CRED_NOMBRE,
        type: 'smtp',
        data: {
          user: USUARIO,
          password: CLAVE,
          host: HOST,
          port: PUERTO,
          /* 587 usa STARTTLS, no SSL directo. 465 sí es SSL. */
          secure: PUERTO === 465,
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
