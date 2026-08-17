# Correo de los formularios (PIM y PWE)

Cómo queda montado el envío de leads y qué hay que hacer a mano en n8n y Brevo.

> **Ninguna clave va en este repo.** Contraseñas SMTP y API keys viven solo en el
> almacén de credenciales de n8n. Si alguna vez aparece una clave en un archivo
> de este repo, es un bug: sácala y rótala.

## Cómo funciona

```
Formulario del sitio (Astro)
   │  POST urlencoded
   ▼
Webhook n8n  →  Config  →  ¿Humano?  ─── bot ──→ Respond (success: true)
                              │
                            humano
                              ▼
                        Aviso interno  ──→  Autorespuesta  ──→  Respond
                     (al buzón del negocio)   (a quien cotizó)
```

Cuatro decisiones que explican el diseño:

- **`Config` es el único nodo que se edita.** Remitente, destinatarios, teléfono y
  los textos ES/EN están ahí. Cambiar de dominio o de buzón es tocar un campo, no
  buscar dentro del HTML de dos correos.
- **El filtro `¿Humano?`** lee el campo trampa `botcheck` que el formulario ya
  enviaba pero que nadie revisaba. Los bots reciben `success: true` igual, para no
  avisarles que fueron filtrados.
- **El aviso interno falla ruidoso** (3 reintentos y luego error). Si no sale, el
  visitante ve el error y puede reintentar. Perder un lead en silencio es peor.
- **La autorespuesta falla suave** (`continueRegularOutput`). Si el visitante
  escribió mal su correo, el lead ya está capturado y el sitio responde OK igual.

El idioma sale del campo oculto `lang` que manda el formulario, así que quien
cotiza en inglés recibe el correo en inglés.

## Paso 1 — Credencial SMTP en n8n (una sola vez)

En n8n: **Credentials → New → SMTP**. Nómbrala exactamente **`SMTP Brevo`**.

| Campo | Valor |
|---|---|
| Host | `smtp-relay.brevo.com` |
| Puerto | `587` |
| SSL/TLS | Desactivado (usa STARTTLS en 587) |
| Usuario | El login SMTP que aparece en Brevo → **SMTP & API → SMTP** |
| Contraseña | La *SMTP key* de esa misma pantalla |

La contraseña se pega **aquí y en ningún otro lado**. Los dos workflows la
referencian por el nombre de la credencial.

## Paso 2 — Importar los workflows

En n8n: **Workflows → Import from File**.

- `pim-lead-workflow.json` → flujo "PIM - Lead Formulario Web" (`/webhook/pim-lead`)
- `pwe-lead-workflow.json` → flujo "PWE - Lead Formulario Web" (`/webhook/pwe-lead`)

Al importar, n8n no reconocerá el `id` de credencial del archivo. Abre los nodos
**Aviso interno** y **Autorespuesta al cliente** de cada flujo y selecciona
`SMTP Brevo` en el desplegable. Son cuatro nodos en total.

Después, **activa** ambos workflows.

## Paso 3 — Probar

Envía el formulario desde el sitio y confirma tres cosas:

1. Llega el aviso interno al buzón del negocio (y la copia, si está configurada).
2. Llega la autorespuesta al correo que pusiste en el formulario.
3. Ninguno de los dos cayó en spam.

Si cae en spam, revisa en Brevo que el dominio remitente siga verificado
(DKIM y SPF en verde). Es la causa habitual.

Para probar el filtro anti-bot, en el inspector del navegador marca el checkbox
oculto `botcheck` y envía: debe responder OK sin que llegue ningún correo.

## Dónde se cambian los datos

Todo en el nodo **`Config`** de cada workflow:

| Campo | PIM | PWE |
|---|---|---|
| `fromEmail` | `avisos@mailweb.site` | `avisos@mailweb.site` |
| `fromName` | Panamá International Movers | Panamá Worldwide Express |
| `toEmail` | `info@panamainternationalmovers.com` | `josimarguilbaud@gmail.com` ⚠️ |
| `ccEmail` | `josimarguilbaud@gmail.com` | (vacío) |

⚠️ **PWE apunta al Gmail a propósito.** `info@panamaworldwideexpress.com` todavía
no existe; si se apunta ahí, los correos rebotan y se pierden leads. Cambiarlo
cuando el buzón esté activo.

## Pendiente cuando se pueda

**Verificar `panamainternationalmovers.com` (y luego el de PWE) en Brevo.** Hoy
todo sale desde `mailweb.site`, que entrega bien porque está verificado, pero
quien pide una cotización recibe un correo de "Panamá International Movers" desde
un dominio que no reconoce. Con el dominio propio verificado, es cambiar
`fromEmail` en el nodo `Config` y nada más.

## Pendiente en PWE antes de producción

- NAP real en `apps/pwe/src/data/site.ts` (teléfonos, WhatsApp, dirección, email y
  año de fundación son placeholder).
- Actualizar `phone` y `whatsappUrl` en el nodo `Config` del workflow de PWE, que
  hoy copian esos mismos placeholder.
- Quitar `PUBLIC_NOINDEX=true` cuando el sitio esté listo para indexarse.
