import { defineStore } from 'pinia'
import { APP_PINIA_STORAGE } from '@/common/config'
import {
  ADMIN_LAYOUT_MODE,
  ADMIN_MENU_ONLY,
  ADMIN_MENU_IS_ROUTER,
  ADMIN_MENU_UNFOLD,
} from '@/common/admin'
import { IObject } from '@/@types/interface'

interface layoutStateTypes {
  mode: string
  uniqueOpened: boolean
  isVueRouter: boolean
  menuUnfoldStatus: boolean
  layoutTheme: IObject
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
    mode: ADMIN_LAYOUT_MODE,
    uniqueOpened: ADMIN_MENU_ONLY,
    isVueRouter: ADMIN_MENU_IS_ROUTER,
    menuUnfoldStatus: ADMIN_MENU_UNFOLD,
    layoutTheme: {
      siderBgColor: '#263238',
      mentTextColor: '#8a979e',
      mentActiveColor: '#e8eaec',
    },
  }),
  getters: {},
  actions: {
    setMode(data: any) {
      this.mode = data
    },
    setMenuUnfoldStatus(data: any) {
      this.menuUnfoldStatus = data
    },
    setLayoutTheme(data: any) {
      this.layoutTheme = data
    },
  },
})
