// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import guides from './src/routes/guides'

import markdoc from '@astrojs/markdoc'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'osTicket 2.0',
            social: {
                github: 'https://github.com/enhancesoft/osticket-2.0',
            },
            sidebar: [
                guides,
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
            customCss: ['./src/styles/tailwind.css', './src/styles/typography.css'],
        }),
        markdoc(),
        react(),
        tailwind({
            // Disable default base styles
            applyBaseStyles: false,
        }),
    ],
})
