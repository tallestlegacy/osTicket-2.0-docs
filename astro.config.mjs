// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import guides from './src/routes/guides'

import markdoc from '@astrojs/markdoc'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
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
    }), markdoc(), react()],
})