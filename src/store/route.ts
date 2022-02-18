import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { APP_PINIA_STORAGE } from '@/common/config'

interface routeStateTypes {
  pagesRoutes: Array<RouteRecordRaw>
  viewsRoutes: Array<RouteRecordRaw>
  allViewsRoutes: Array<RouteRecordRaw>
  allRoutes: Array<RouteRecordRaw>
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
    pagesRoutes: [],
    viewsRoutes: [],
    allViewsRoutes: [],
    allRoutes: [],
  }),
  getters: {},
  actions: {
    setPagesRoutes(data: Array<RouteRecordRaw>) {
      this.pagesRoutes = data
    },
    setViewsRoutes(data: Array<RouteRecordRaw>) {
      this.viewsRoutes = data
    },
    setAllRoutes(data: Array<RouteRecordRaw>) {
      this.allRoutes = data
    },
    getAsyncViewsRoutes() {
      return new Promise((resolve, reject) => {
        // ...
        // API
        // ...
        const asnycRoutes: any = []
        this.allViewsRoutes = this.viewsRoutes.concat(asnycRoutes)
        this.allViewsRoutes.sort((a: any, b: any) => {
          const A: number = a.meta.sort
          const B: number = b.meta.sort
          return A - B
        })
        this.allViewsRoutes.forEach((item: RouteRecordRaw) => {
          const routeName: any = item.name
          if (!router.hasRoute(routeName)) {
            router.getRoutes()
            router.addRoute(item)
          }
        })
        this.setPagesRoutes(this.allViewsRoutes)
        resolve(true)
      })
    },
  },
})
