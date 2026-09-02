/* ============================================================================
   Texto enriquecido acotado para el contenido de los datos.

   Por qué existe: las páginas de servicio y destino imprimían cada párrafo como
   texto plano (`<p>{p}</p>`), así que el contenido no podía llevar ni negrita ni
   enlaces. Eso dejaba dos cosas fuera: el énfasis quirúrgico que pide la voz del
   sitio, y —lo más caro— los enlaces internos contextuales en el cuerpo de las
   58 páginas de servicio y destino, que es la mayor palanca de SEO del sitio.

   Por qué no `set:html` a secas ni un parser de markdown completo: `set:html`
   con el string tal cual dejaría pasar cualquier etiqueta, y un parser completo
   es peso y superficie que no necesitamos. Aquí se escapa TODO primero y luego
   se reintroduce únicamente lo permitido, así que es seguro por construcción:
   nada que venga en el string puede convertirse en HTML que no sea negrita o
   enlace.

   Sintaxis admitida:
     **negrita**
     [texto](/es/servicios/algo/)     enlace interno
     [texto](https://ejemplo.com)     enlace externo, sale con target y rel
   ========================================================================== */

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapa todo lo que el navegador podría interpretar como marcado. */
export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/* Solo se aceptan destinos de enlace que no puedan ejecutar nada: rutas del
   propio sitio, http(s), mailto y tel. Deja fuera `javascript:` y `data:`. */
const SAFE_HREF = /^(\/|https?:\/\/|mailto:|tel:)/i;

/**
 * Convierte la sintaxis admitida en HTML, sobre un texto ya escapado.
 * El resultado es apto para `set:html`.
 */
export function inline(input: string): string {
  let out = escapeHtml(input);

  /* Enlaces primero: si se hiciera al revés, una negrita dentro del texto del
     enlace rompería el emparejamiento de los corchetes. */
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, text, href) => {
    if (!SAFE_HREF.test(href)) return match; // destino no permitido: se deja literal
    const external = /^https?:\/\//i.test(href);
    const attrs = external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}"${attrs}>${text}</a>`;
  });

  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  return out;
}

/**
 * Quita la sintaxis y devuelve el texto pelado.
 *
 * Hace falta para el JSON-LD: las respuestas de FAQ alimentan a la vez la página
 * y el schema `FAQPage`. Sin esto, Google leería los asteriscos y los corchetes
 * literales dentro del dato estructurado.
 */
export function plain(input: string): string {
  return input
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1');
}
