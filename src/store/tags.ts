import { defineStore } from 'pinia'
import { tagStateTypes } from '@/@types/store'
import GeneralCache from '@/utils/general-cache'

interface tagStateTypes {}

export const useTagStore = defineStore({
  id: 'tagStore',
  state: (): tagStateTypes => ({}),
  actions: {}
})

