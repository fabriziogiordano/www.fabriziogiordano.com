// https://astro.build/config

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default defineConfig({
  site: "https://www.fabriziogiordano.com",
  integrations: [
    mdx(),
    sitemap(),
    compress({
      css: true,
      html: true,
      img: false,
      js: true,
      svg: true,
    }),
  ],
});
