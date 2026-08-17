import type { APIRoute } from 'astro';
import { site } from '../data/site';

/* robots.txt generado en build, atado al mismo flag que el <meta robots>.

   Sin esto Google no descubre el sitemap por su cuenta: hay que enviárselo a
   mano en Search Console y esperar. Con la línea Sitemap, cualquier buscador
   que pase por el dominio lo encuentra solo.

   Se genera según PUBLIC_NOINDEX para que no haya contradicción entre lo que
   dice el HTML y lo que dice el robots. Un sitio en staging que se declara
   noindex en la página pero abierto en el robots es justo la forma de que
   Google acabe rastreando lo que no debe. */
export const GET: APIRoute = () => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';

  const cuerpo = noindex
    ? ['# Sitio no publicado todavía.', 'User-agent: *', 'Disallow: /', ''].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${site.domain}/sitemap-index.xml`,
        '',
      ].join('\n');

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
