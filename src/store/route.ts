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
    pagesRoutes: [],
    viewsRoutes: [],
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
