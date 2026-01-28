import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  image: {
    layout: "constrained",
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "gruvbox-dark-hard",
    },
  },
});
