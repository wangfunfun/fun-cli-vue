import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

interface tagStateTypes {}

export const useTagStore = defineStore({
  id: 'tagStore',
  state: (): tagStateTypes => ({}),
  actions: {}
})

