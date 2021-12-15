import { defineStore } from 'pinia'
import { userStateTypes } from '@/@types/store'
import GeneralCache from '@/utils/general-cache'

export interface userStateTypes {}

export const useUserStore = defineStore({
  id: 'userStore',
  state: (): userStateTypes => ({}),
  actions: {}
})
