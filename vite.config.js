import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                sass: resolve(__dirname, "sass.html"),
                stats10: resolve(__dirname, "stats10.html"),
                statistics: resolve(__dirname, "statistik.html"),
                about: resolve(__dirname, 'om.html'),
                animering: resolve(__dirname, 'animering.html'),
            },
        },
    },

})
