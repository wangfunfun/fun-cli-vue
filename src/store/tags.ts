import { defineStore } from 'pinia'
import { APP_PINIA_STORAGE } from '@/common/config'

interface tagStateTypes {}

export const useTagStore = defineStore({
  id: 'tagStore',
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'configStore',
        storage: APP_PINIA_STORAGE,
      },
    ],
  },
  state: (): tagStateTypes => ({}),
  getters: {},
  actions: {},
})
