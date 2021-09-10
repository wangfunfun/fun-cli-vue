/**
 * @name vue-router路由组装
 * @modules layout 模块化路由
 * @pages 独立页面路由
 * @history 路由模式配置，hash模式：createWebHashHistory，history模式：createWebHistory
 * @layoutRoutes 导出的 layout 需要的路由信息
 * @pageRoutes 导出的独立页面路由信息
 * @staticRoutes 导出全部的路由信息
 * @desc import.meta.globEager 为直接引入，路径需为以 ./ 开头或以 / 开头。
 * @desc Guarding for-in (guard-for-in)此规则旨在防止因使用for in循环而不过滤循环中的结果而可能出现的意外行为。
 * 因此，当for in循环不使用if语句过滤其结果时，它会发出警告。
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 预加载 - 落地页
import Index from '@/views/index.vue'

// 自动导入 layout 路由
const modulesFiles: Object = import.meta.globEager('./modules/*.ts')
let modulesRoutes: Array<RouteRecordRaw> = []
Object.keys(modulesFiles).forEach((key) => {
  modulesRoutes = modulesRoutes.concat(modulesFiles[key].default)
})
export const layoutRoutes: Array<RouteRecordRaw> = [...modulesRoutes]

// 自动导入独立页面路由
const pagesFiles: Object = import.meta.globEager('./pages/*.ts')
let pagesRoutes: Array<RouteRecordRaw> = []
Object.keys(pagesFiles).forEach((key) => {
  pagesRoutes = pagesRoutes.concat(pagesFiles[key].default)
})

// 配置静态路由
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    // 落地页重定向到欢迎页
    redirect: '/login'
  },
  // 独立页面路由
  ...pagesRoutes
]
// 组装路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 导出组装后的路由
export default router
