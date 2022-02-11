import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

export interface userStateTypes {}

export const useUserStore = defineStore({
  id: 'userStore',
  persist: {
    enabled: true,
  },
  state: (): userStateTypes => ({}),
  getters: {},
  actions: {},
})
