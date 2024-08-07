import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: "https://fabriziogiordano.com",
  base: "/",
  trailingSlash: "ignore",
  output: "static",
  outDir: "./dist",

  server: {
    port: 4050
  },

  build: {
    format: "file",
    assets: "assets"
  },

  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    },
    server: {
      watch: {
        ignored: ["/dist/**", "/node_modules/**", "/.astro/**", "astro.log"]
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'main.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },

  integrations: [
    mdx(),
    sitemap(),
    compress({
      outDir: "./dist",
      css: true,
      html: true,
      img: false,
      js: true,
      svg: false,
      logger: 1
    }),
  ],
});
