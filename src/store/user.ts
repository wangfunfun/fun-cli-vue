import { defineStore } from 'pinia'
import { APP_PINIA_STORAGE } from '@/common/config'

export interface userStateTypes {}

export const useUserStore = defineStore({
  id: 'userStore',
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'configStore',
        storage: APP_PINIA_STORAGE,
      },
    ],
  },
  state: (): userStateTypes => ({}),
  getters: {},
  actions: {},
})
