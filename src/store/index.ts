import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import rootStateTypes, { AllStateTypes } from './types'

// layout 布局配置 store
import layout from './layout/index'
// tags 标签配置
import tags from './tags/index'
// 路由配置 store
import route from './route/index'
// 用户模块
import user from './user/index'

export const store = createStore<rootStateTypes>({
  // 根仓库
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // 模块化仓库
  modules: {
    layout,
    tags,
    route,
    user
  }
})


// vuex4.x 对 ts 的兼容性差，需要手动定义注入类型
export const key: InjectionKey<Store<rootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
