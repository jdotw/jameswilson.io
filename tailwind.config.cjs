/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        mono: [`"MD IO 0.5"`, "md-io-fallback", "monospace"],
        oswald: ["Obviously", "oswald-regular-fallback", "sans-serif"],
        "obviously-wide": [
          `"Obviously Wide", "obviously-wide-fallback", "sans-serif"`,
        ],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [
    plugin(function astroComponentsPlugin({ addComponents, theme }) {
      addComponents({
        ".hero-heading-1": {
          "@apply font-oswald text-4xl min-[500px]:text-5xl text-right leading-tight":
            {},
        },
        ".hero-heading-2": {
          "@apply font-oswald text-3xl text-right leading-tight": {},
        },

        ".heading-1": {
          "@apply font-oswald text-7xl leading-tight": {},
        },

        ".heading-2": {
          "@apply font-oswald text-6xl leading-tight": {},
        },

        ".heading-3": {
          "@apply font-oswald text-4xl leading-tight": {},
        },

        ".heading-4": {
          "@apply font-oswald text-2xl leading-tight": {},
        },

        ".heading-5": {
          "@apply font-oswald text-xl leading-tight": {},
        },

        ".link-navbar": {
          "@apply font-oswald text-lg leading-tight": {},
        },

        ".text-1": {
          "@apply text-base font-light": {},
        },
      });
    }),
  ],
};
