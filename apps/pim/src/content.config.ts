import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  category: z.string(),
  heroImage: z.string(),
  author: z.string().default('Panamá International Movers'),
  draft: z.boolean().default(false),
  /* Nombre del archivo del gemelo en el otro idioma, sin extensión.
     Solo cuando existe se emite el par de hreflang: declarar una alterna que no
     existe fue justamente el bug que tenía /es/blog/ apuntando a /en/blog/. */
  translation: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: postSchema,
});

export const collections = { blog, blogEn };
