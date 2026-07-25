import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const topics = defineCollection({
  loader: file('src/content/topics/topics.json'),
  schema: z.object({
    slug: z.string(),
    type: z.enum(['topic', 'transition']),
    band: z.string().optional(),
    bandFrom: z.string().optional(),
    bandTo: z.string().optional(),
    stationFrom: z.string().optional(),
    stationTo: z.string().optional(),
    title: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    intro: z.string(),
    corpusLines: z.array(z.string()).optional(),
    howToUse: z.string().optional(),
    stationSteps: z
      .array(
        z.object({
          station: z.string(),
          band: z.string(),
          note: z.string(),
        })
      )
      .optional(),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = { topics };
