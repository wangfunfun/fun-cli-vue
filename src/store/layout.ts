import { defineStore } from 'pinia'
import { APP_LAYOUT_MODE } from '@/common/config'

interface layoutStateTypes {
  mode: any
}

export const useLayoutStore = defineStore({
  id: 'layoutStore',
  persist: {
    enabled: true,
  },
  state: (): layoutStateTypes => ({
    // 布局模式
    mode: APP_LAYOUT_MODE,
  }),
  getters: {},
  actions: {
    // 设置布局模式
    setMode(data: any) {
      this.mode = data
    },
  },
})
