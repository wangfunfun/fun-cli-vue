import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import GeneralCache from '@/utils/general-cache'

// auto import routes files

const pagesFiles: Object = import.meta.globEager('./pages/*.ts')
const viewsFiles: Object = import.meta.globEager('./views/*.ts')

let pagesRoutes: Array<RouteRecordRaw> = []
let viewsRoutes: Array<RouteRecordRaw> = []
let allRoutes: Array<RouteRecordRaw> = []

Object.keys(pagesFiles).forEach((key) => {
  pagesRoutes = pagesRoutes.concat(pagesFiles[key].default)
})
Object.keys(viewsFiles).forEach((key) => {
  viewsRoutes = viewsRoutes.concat(viewsFiles[key].default)
})

// set up routes

allRoutes = pagesRoutes.concat(viewsRoutes)

new GeneralCache('pagesRoutes', 'local').set(pagesRoutes)
new GeneralCache('viewsRoutes', 'local').set(viewsRoutes)
new GeneralCache('allRoutes', 'local').set(allRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
})

export default router
