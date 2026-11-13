import { defineCollection } from "astro:content";
import {z} from "astro/zod"
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      category: z.string(),
      readTime: z.string(),
      draft: z.boolean().default(false),

      heroImage: image().optional(),
      mediumUrl: z.string().optional(),
    }),
});

export const collections = {
  blog,
};