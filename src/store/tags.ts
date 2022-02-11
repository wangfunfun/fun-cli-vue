import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

interface tagStateTypes {}

export const useTagStore = defineStore({
  id: 'tagStore',
  persist: {
    enabled: true,
  },
  state: (): tagStateTypes => ({}),
  getters: {},
  actions: {},
})
