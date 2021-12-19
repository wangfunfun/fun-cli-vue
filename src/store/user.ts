import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

export interface userStateTypes {}

export const useUserStore = defineStore({
  id: 'userStore',
  state: (): userStateTypes => ({}),
  actions: {}
})
