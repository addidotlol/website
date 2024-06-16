import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://ultramarine-linux.org",
  integrations: [mdx(), sitemap(), tailwind(), vue(), icon()],
  redirects: {
    "/release-announcements/40": {
      status: 302,
      destination: "https://wiki.ultramarine-linux.org/en/release/upgrade-to-ultramarine-40/"
    }
  }
});