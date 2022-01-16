import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router/config'
import GeneralCache from '@/utils/general-cache'

interface routeStateTypes {
  pagesRoutes: any
  viewsRoutes: any
  allRoutes: any
}

export const useRouteStore = defineStore({
  id: 'routeStore',
  state: (): routeStateTypes => ({
    // 独立页面路由
    pagesRoutes: new GeneralCache('pagesRoutes', 'local').get(),
    // 管理系统路由
    viewsRoutes: new GeneralCache('viewsRoutes', 'local').get(),
    // 全部路由
    allRoutes: new GeneralCache('allRoutes', 'local').get(),
  }),
  getters: {
    // 管理系统路由
    viewsRoutes(state) {
      return state.viewsRoutes
    },
  },
  actions: {
    // 设置独立页面路由
    setPagesRoutes(data: Array<RouteRecordRaw>) {
      this.pagesRoutes = data
      new GeneralCache('pagesRoutes', 'local').set(data)
    },
    // 设置管理系统路由
    setViewsRoutes(data: Array<RouteRecordRaw>) {
      this.viewsRoutes = data
      new GeneralCache('viewsRoutes', 'local').set(data)
    },
    // 设置全部路由
    setAllRoutes(data: Array<RouteRecordRaw>) {
      this.allRoutes = data
      new GeneralCache('allRoutes', 'local').set(data)
    },
    // 异步获取管理系统路由
    getAsyncViewsRoutes() {
      return new Promise((resolve, reject) => {
        // ...
        // API
        // ...
        const asnycRoutes: any = []
        const allViewsRoutes: Array<RouteRecordRaw> =
          this.viewsRoutes.concat(asnycRoutes)
        allViewsRoutes.sort((a: any, b: any) => {
          const A: number = a.meta.sort
          const B: number = b.meta.sort
          return A - B
        })
        allViewsRoutes.forEach((item: RouteRecordRaw) => {
          const routeName: any = item.name
          if (!router.hasRoute(routeName)) {
            router.getRoutes()
            router.addRoute(item)
          }
        })
        this.setPagesRoutes(allViewsRoutes)
        resolve(true)
      })
    },
  },
})
