import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import GeneralCache from '@/utils/cli-general-cache'

// 自动引入路由文件

const routerFiles: Object = import.meta.globEager('./modules/*.ts')

let routes: Array<RouteRecordRaw> = []

Object.keys(routerFiles).forEach((key) => {
  routes = routes.concat(routerFiles[key].default)
})

// 初始化静态路由

new GeneralCache('viewsRoutes', 'local').set(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

// 导出路由配置

export { routes }

export default router
