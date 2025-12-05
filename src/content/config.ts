import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Olivia Knoedt'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    company_url: z.union([z.string().url(), z.null(), z.undefined()]).optional(), // Allows null, undefined, or valid URL
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    description: z.string(),
    tech: z.union([z.string(), z.null(), z.undefined()]).optional(), // Comma-separated string, will be parsed
  }),
});

export const collections = { blog, experience };

