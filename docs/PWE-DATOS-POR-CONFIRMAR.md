# PWE — lo que falta confirmar antes de publicar

El sitio está construido y sin enlaces rotos, pero **parte del contenido lo
redactamos nosotros**. Esta es la lista de lo que Panamá Worldwide Express tiene
que validar. Está ordenada por riesgo: lo de arriba puede costar un cliente si
está mal, lo de abajo es cosmético.

`PUBLIC_NOINDEX=true` mantiene el sitio fuera de Google mientras tanto. Es la red.

---

## 1. Bloqueante — no publicar sin esto

### Servicios que no estaban en el sitio anterior

Añadimos cuatro servicios al catálogo. Son cosas que una mudadora internacional
presta de forma natural y que la gente busca en Google, pero **hay que confirmar
que PWE efectivamente los ofrece**. Están marcados `isNew` en
`apps/pwe/src/data/services.ts` para que sea fácil sacarlos.

| Servicio | Pregunta al cliente |
|---|---|
| Contenedor compartido (grupaje LCL) | ¿Consolidan carga con otras mudanzas al mismo destino? |
| Menaje de casa y aduana | ¿Lo ofrecen como servicio suelto, sin la mudanza? |
| Guardamuebles | ¿Bodega propia o subcontratada? ¿Por cuánto tiempo mínimo? |
| Carga aérea, marítima y terrestre | Confirmado por Josimar que sí va. Falta el detalle operativo. |

### Corredores internacionales

Publicamos **12 países de destino** con tiempos de tránsito y notas aduaneras.
Los tiempos son rangos estándar del sector, deliberadamente amplios.

- ¿Operan estos 12 corredores? ¿Falta alguno que muevan mucho?
- ¿Los tiempos de tránsito calzan con su experiencia real?
- ¿Tienen socio en destino en cada uno?

Están en `apps/pwe/src/data/destinations.ts`, uno por bloque.

### Año de fundación

`site.ts` dice `foundingYear: 1998`. **Es un cálculo, no un dato.** Sale de que
el sitio publicado dice "más de 25 años" y sus imágenes se subieron en 2023.

Ese número sale en el JSON-LD de la empresa, que es lo que Google lee. Conviene
que sea el real.

---

## 2. Importante — revisar antes de dar por buena la web

### Textos de los 11 servicios

Cada servicio tiene entre 300 y 600 palabras que redactamos nosotros, más tres
preguntas frecuentes con sus respuestas. Se escribieron a partir de lo que decía
el sitio anterior y de cómo funciona el oficio, pero **el cliente conoce su
operación mejor que nosotros**.

Lo que conviene que lea con cuidado, porque son promesas operativas:

- "Evaluación gratuita a domicilio" (venía del sitio anterior)
- "Cotización en menos de 24 horas" (lo pusimos nosotros)
- "Cubrimos puertas y ventanas para no dañar el inmueble" (venía del anterior)
- "Desembalamos y nos llevamos los materiales" (venía del anterior)
- "Pagamos aranceles e impuestos en tu nombre" (venía del anterior)

Si alguna no se cumple siempre, hay que suavizarla o quitarla.

### Redes sociales

`site.socials` está en `#`. El sitio anterior no enlazaba ninguna. Si tienen
Facebook, Instagram o LinkedIn, ponerlos: cuentan para el perfil de empresa.

---

## 3. Menor — cosmético o de mantenimiento

### Imágenes

El sitio usa dos fotos: `hero-truck.jpg` y `yard.jpg`. **Son de stock.** Si el
cliente tiene fotos de su equipo, sus camiones o su bodega, cambian mucho la
percepción y ayudan al SEO local.

### El blog

Existe la sección en el diseño pero no hay artículos, así que **lo quitamos del
menú y del footer**. Un enlace a 404 en producción es peor que no tenerlo.
Cuando haya artículos, se vuelve a añadir en `Header.astro` y `Footer.astro`.

Vale la pena: a PIM el blog le trae tráfico orgánico con 8 posts.

### Cifras de la home

Las anteriores ("10 provincias", "+15k cajas al año", "100% carga asegurada") se
quitaron porque no tenían ninguna fuente. Las que hay ahora son defendibles:
más de 25 años, respuesta en 24 h, tres vías de transporte y evaluación gratis.

Si el cliente tiene cifras reales de volumen, quedan mejor que las genéricas.

---

## Para publicar

1. Confirmar al menos el bloque 1.
2. Quitar `PUBLIC_NOINDEX` del entorno de producción (o ponerlo en `false`).
3. Importar `pwe-lead-workflow.json` en n8n y activarlo, o el formulario
   responderá 404. Ver `docs/EMAIL-SETUP.md`.
4. Verificar el dominio en Google Search Console y enviar
   `https://panamaworldwideexpress.com/sitemap-index.xml`.

## Qué tiene el sitio hoy

59 páginas, sin enlaces rotos:

| Sección | ES | EN |
|---|---|---|
| Home | ✅ | ✅ |
| Servicios (índice + 11 detalles) | 12 | 12 |
| Destinos (índice + 12 países) | 13 | 13 |
| Nosotros | ✅ | ✅ |
| Recursos | ✅ | ✅ |
| Contacto | ✅ | ✅ |

Cada página de servicio y de destino lleva su propio `title`, meta description,
H1, hreflang recíproco y JSON-LD. Las de servicio además llevan `FAQPage`, que
es lo que puede sacar resultados enriquecidos en Google.
