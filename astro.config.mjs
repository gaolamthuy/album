// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: ["665f-171-232-183-0.ngrok-free.app"],
    },
  },
});
