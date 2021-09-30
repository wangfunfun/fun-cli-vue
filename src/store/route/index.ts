import { Module } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import router from '../../router/config'
import { routes, layoutRoutes } from '../../router'
import routeStateTypes from './types'
import rootStateTypes from '../types'
import Storage from '../../utils/storage'

// layout - menu
const route: Module<routeStateTypes, rootStateTypes> = {
  namespaced: true,
  state: {
    // layout 路由
    ADMINSYS_LAYOUT_ROUTES: [],
    // 全部路由信息
    ADMINSYS_ALL_ROUTES: []
  },
  mutations: {
    /**
     * @name 动态设置layout菜单路由
     * @desc 本地化存储 LAYOUT_ROUTES(未排序)
     */
    SET_ADMINSYS_MENUOPS(state: routeStateTypes, data) {
      state.ADMINSYS_LAYOUT_ROUTES = data
      new Storage('LAYOUT_ROUTES', 'local', data).set()
    },
    /**
     * @name 动态设置全部路由信息
     * @desc 本地化存储 ALL_ROUTES(未排序)
     */
    SET_ADMINSYS_ALL_ROUTES(state: routeStateTypes, data) {
      state.ADMINSYS_ALL_ROUTES = routes.concat(data)
      new Storage('ALL_ROUTES', 'local', state.ADMINSYS_ALL_ROUTES).set()
    }
  },
  actions: {
    /**
     * @name 异步查询layout路由
     * @desc 此处 api 查询异步路由（这里使用 setTimeout 模拟异步），排序，动态添加
     * @desc 如果接口异常，则 reject('failed') 抛出异常
     */
    getLayoutRoute({ commit }) {
      return new Promise((resolve, reject) => {
        let asnycRoutes: any = new Storage('ASYNC_ROUTES', 'local').get()
        asnycRoutes = asnycRoutes ? asnycRoutes.save_data : []
        setTimeout(() => {
          const apiArr: any = []
          new Storage('ASYNC_ROUTES', 'local', apiArr).set()
          asnycRoutes = apiArr
        }, 100)
        const concatRoutes: Array<RouteRecordRaw> = layoutRoutes.concat(asnycRoutes)
        commit('SET_ADMINSYS_MENUOPS', concatRoutes)
        // 路由排序
        concatRoutes.sort((a: any, b: any) => {
          const A: number = a.meta.sort
          const B: number = b.meta.sort
          return A - B
        })
        // 动态添加路由
        concatRoutes.forEach((item: RouteRecordRaw) => {
          const routeName: any = item.name
          if (!router.hasRoute(routeName)) {
            router.getRoutes()
            router.addRoute(item)
          }
        })
        resolve('success')
      })
    }
  }
}

export default route
