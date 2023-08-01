
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articlesCollection = defineCollection({ 
  type: 'content', // v2.5.0 and later
  schema: z.object({
      title: z.string(),
      heroImage: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      draft: z.boolean().optional(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};