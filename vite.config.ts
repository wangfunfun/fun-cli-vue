import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  plugins: [vue(), VitePluginHtmlEnv()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
  base: './',
  server: {
    host: true,
    open: true,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/'),
    //   },
    // },
  },
})
