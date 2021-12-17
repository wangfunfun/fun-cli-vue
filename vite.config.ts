import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  // 插件
  plugins: [vue(), VitePluginHtmlEnv()],
  // 解析
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  // css处理
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
  // 根路径
  base: './',
  // cli服务
  server: {
    host: true,
    port: 8080,
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
