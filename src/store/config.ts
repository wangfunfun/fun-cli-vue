import { defineStore } from 'pinia'
import {
  APP_DEFAULT_THEME,
  APP_DEFAULT_LANGUAGE,
  APP_PINIA_STORAGE,
} from '@/common/config'

interface configStateTypes {
  theme: any
  language: any
}

export const useConfigStore = defineStore({
  id: 'configStore',
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'configStore',
        storage: APP_PINIA_STORAGE,
      },
    ],
  },
  state: (): configStateTypes => ({
    // 主题
    theme: APP_DEFAULT_THEME,
    // 语言
    language: APP_DEFAULT_LANGUAGE,
  }),
  getters: {
    // 当前语言
    nowLanguage: (state) => {
      return state.language
    },
    // 当前主题
    nowTheme: (state) => {
      return state.theme
    },
  },
  actions: {
    // 设置主题
    setTheme(data: any) {
      this.theme = data
    },
    // 设置语言
    setLanguage(data: any) {
      this.language = data
    },
  },
})
