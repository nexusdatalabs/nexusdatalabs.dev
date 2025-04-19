// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://nexusdatalabs.dev",
    prefetch: {
        prefetchAll: true,
    },
    trailingSlash: "never",
    build: {
        format: "file",
    },
    experimental: {
        clientPrerender: true,
        fonts: [{
            provider: fontProviders.bunny(),
            name: "JetBrains Mono",
            cssVariable: "--font-monospace"
        }]
    },
    integrations: [sitemap()]
});
