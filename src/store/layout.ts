import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

interface layoutStateTypes {
  mode: any
}

export const useLayoutStore = defineStore({
  id: 'layoutStore',
  state: (): layoutStateTypes => ({
    // 布局模式
    mode: new GeneralCache('mode', 'local').get(),
  }),
  getters: {
    // 布局模式
    mode(state) {
      return state.mode
    },
  },
  actions: {
    // 设置布局模式
    setMode(data: any) {
      this.mode = data
      new GeneralCache('mode', 'local').set(data)
    },
  },
})
