// @ts-check
import { defineConfig } from 'astro/config'

// Astro plugins
import starlight from '@astrojs/starlight'
import markdoc from '@astrojs/markdoc'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// Router config
import sidebar from './src/routes'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'osTicket 2.0',
            social: {
                github: 'https://github.com/enhancesoft/osticket-2.0',
            },
            sidebar,
            customCss: ['./src/styles/tailwind.css', './src/styles/typography.css'],
            plugins: [],
        }),
        markdoc(),
        react(),
        tailwind({
            // Disable default base styles
            applyBaseStyles: false,
        }),
    ],
})
