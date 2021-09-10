// 配置手册
// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, './')
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
  },
  // 设置打包路径
  base: './',
  server: {
    // 服务器监听的 IP 地址，默认 0.0.0.0 监听全部的
    host: '0.0.0.0',
    // 设置服务启动端口号
    port: 7077,
    // 设置服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 是否开启 https
    https: false
    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
