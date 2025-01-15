// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import guides from './src/routes/guides'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Docs',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                guides,
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
})
