import { image, z, defineCollection } from "astro:content";
const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default(["article"]),
    image: z.string(),
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
    //image: image().refine((img) => img.width >= 1080, {
    //  message: "Astrophoto image must be at least 1080 pixels wide!",
    //}),
    date: z.string().transform((str) => new Date(str)),
  }),
});
export const collections = {
  articles: articlesCollection,
  astro: astroCollection,
};
