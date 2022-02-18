import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
import ViteSvgIcons from 'vite-plugin-svg-icons'

// vite 自动导入组件配置，需要请自行开启
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginHtmlEnv(),
    // 自定义 svg 图标插件配置
    ViteSvgIcons({
      iconDirs: [resolve(__dirname, 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
    }),
    // vite 自动导入组件配置，需要请自行开启
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  // 解析
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  // css 变量全局注册
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
    // vite proxy 代理配置，需要请自行开启
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
