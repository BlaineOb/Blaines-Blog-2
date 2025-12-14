import { defineConfig } from "astro/config";

export default defineConfig({
  image: {
    layout: "constrained",
  },
  markdown: {
    shikiConfig: {
      theme: "gruvbox-dark-hard",
    },
  },
});
