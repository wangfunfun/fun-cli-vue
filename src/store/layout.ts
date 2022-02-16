import { defineStore } from 'pinia'
import { APP_LAYOUT_MODE, APP_PINIA_STORAGE } from '@/common/config'

interface layoutStateTypes {
  mode: any
}

export const useLayoutStore = defineStore({
  id: 'layoutStore',
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'configStore',
        storage: APP_PINIA_STORAGE,
      },
    ],
  },
  state: (): layoutStateTypes => ({
    mode: APP_LAYOUT_MODE,
  }),
  getters: {},
  actions: {
    setMode(data: any) {
      this.mode = data
    },
  },
})
