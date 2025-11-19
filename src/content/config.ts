import { z, defineCollection } from "astro:content";
const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    tags: z.array(z.string()).default(["article"]),
    image: z.string(),
    excerpt: z.string().optional(),
    //image: image().refine((img) => img.width >= 1080, {
    //  message: "Article image must be at least 1080 pixels wide!",
    //}),
    date: z.string().transform((str) => new Date(str)),
  }),
});
const astroCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default(["astro"]),
    image: z.string(),
    catalog: z.string().optional(),
    //image: image().refine((img) => img.width >= 1080, {
    //  message: "Astrophoto image must be at least 1080 pixels wide!",
    //}),
    date: z.string().transform((str) => new Date(str)),
  }),
});
const musicCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()).default(["music"]),
    date: z.string().transform((str) => new Date(str)),
    feature: z.object({
      type: z.enum(["image", "youtube", "twitch"]),
      source: z.string(),
    }),
    streams: z.array(
      z.object({
        service: z.string(),
        url: z.string(),
      })
    ),
  }),
});
export const collections = {
  articles: articlesCollection,
  astro: astroCollection,
  music: musicCollection,
};
