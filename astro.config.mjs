// @ts-check
import { defineConfig, fontProviders } from "astro/config"

import sitemap from "@astrojs/sitemap"

export default defineConfig({
    site: "https://nexusdatalabs.dev",
    trailingSlash: "never",
    build: {
        format: "file",
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            weights: [400, 700],
            styles: ["normal", "italic"],
            fallbacks: ["monospace"],
        },
    ],
    integrations: [sitemap()],
})
