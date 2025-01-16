import { defineMarkdocConfig } from '@astrojs/markdoc/config'
import starlightMarkdoc from '@astrojs/starlight-markdoc'

export default defineMarkdocConfig({
    extends: [starlightMarkdoc()],
    variables: {
        paths: {
            homestead: {
                base: '~/Homestead/',
                yaml: '~/Homestead/Homestead.yaml',
            },
        },
        links: {
            homesteadYaml: '/guides/project-setup#4-edit-the-homesteadyaml-file',
        },
    },
})
