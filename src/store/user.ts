import { defineStore } from 'pinia'
import { APP_PINIA_STORAGE } from '@/common/config'
import { IObject } from '@/@types/interface'
import { logTypeDicts, userTypeDicts } from '@/common/dict'
export interface userStateTypes {
  dicts: IObject[]
}

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
  state: (): userStateTypes => ({
    dicts: [logTypeDicts, userTypeDicts],
  }),
  getters: {},
  actions: {},
})
