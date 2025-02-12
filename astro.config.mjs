import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});
