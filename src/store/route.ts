import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { APP_PINIA_STORAGE } from '@/common/config'

interface routeStateTypes {
  pagesRoutes: any
  viewsRoutes: any
  allRoutes: any
}

export const useRouteStore = defineStore({
  id: 'routeStore',
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'configStore',
        storage: APP_PINIA_STORAGE,
      },
    ],
  },
  state: (): routeStateTypes => ({
    // 独立页面路由
    pagesRoutes: [],
    // 管理系统路由
    viewsRoutes: [],
    // 全部路由
    allRoutes: [],
  }),
  getters: {},
  actions: {
    // 设置独立页面路由
    setPagesRoutes(data: Array<RouteRecordRaw>) {
      this.pagesRoutes = data
    },
    // 设置管理系统路由
    setViewsRoutes(data: Array<RouteRecordRaw>) {
      this.viewsRoutes = data
    },
    // 设置全部路由
    setAllRoutes(data: Array<RouteRecordRaw>) {
      this.allRoutes = data
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
