import { defineStore } from 'pinia'
import { store } from '@/store'
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
    pagesRoutes: new GeneralCache('pagesRoutes', 'local').get(),
    viewsRoutes: new GeneralCache('viewsRoutes', 'local').get(),
    allRoutes: new GeneralCache('allRoutes', 'local').get()
  }),
  getters: {
    viewsRoutes() {
      return this.viewsRoutes
    }
  },
  actions: {
    setPagesRoutes(data) {
      this.pagesRoutes = data
      new GeneralCache('pagesRoutes', 'local').set(data)
    },
    setViewsRoutes(data) {
      this.viewsRoutes = data
      new GeneralCache('viewsRoutes', 'local').set(data)
    },
    setAllRoutes(data) {
      this.allRoutes = data
      new GeneralCache('allRoutes', 'local').set(data)
    },
    getAsyncViewsRoutes() {
      return new Promise((resolve, reject) => {
        // ...
        // API
        // ...
        const asnycRoutes: any = []
        const allViewsRoutes: Array<RouteRecordRaw> = this.viewsRoutes.concat(asnycRoutes)
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
    }
  }
})
