import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import babel from 'rollup-plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [babel({ runtimeHelpers: true, exclude: 'node_modules/**' }), reactRefresh()],
    optimizeDeps: {
        include: ['react', 'react-dom', 'web3']
    },
    define: {
        __DEV__: process.env.NODE_ENV !== 'production'
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'
        },
        preprocessorOptions: {
            stylus: {
                // imports: [path.resolve(process.cwd(), 'src/assets/stylus/lib/mixin.styl')]
            },
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#1890ff'
                }
            }
        }
    },
    build: {
        watch: {
            include: [resolve(__dirname, 'src/contentScripts/**')]
        },
        outDir: resolve(__dirname, 'extension/dist/contentScripts'),
        lib: {
            entry: resolve(__dirname, 'src/contentScripts'),
            formats: ['es']
        },
        rollupOptions: {
            output: {
                entryFileNames: 'index.js'
            }
        }
        // sourcemap: process.env.NODE_ENV !== 'production' ? 'inline' : false
    }
})
