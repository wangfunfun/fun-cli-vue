import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

interface configStateTypes {
  theme: any
  language: any
}

export const useConfigStore = defineStore({
  id: 'configStore',
  state: (): configStateTypes => ({
    // 主题
    theme: new GeneralCache('theme', 'local').get(),
    // 语言
    language: new GeneralCache('language', 'local').get(),
  }),
  getters: {
    // 主题
    theme(state) {
      return state.theme
    },
    // 语言
    language(state) {
      return state.language
    },
  },
  actions: {
    // 设置主题
    setTheme(data: any) {
      this.theme = data
      new GeneralCache('theme', 'local').set(data)
    },
    // 设置语言
    setLanguage(data: any) {
      this.language = data
      new GeneralCache('language', 'local').set(data.alias)
      new GeneralCache('naiveuiLanguage', 'local').set(data.naiveuiLanguage)
      new GeneralCache('naiveuiDateLanguage', 'local').set(
        data.naiveuiDateLanguage
      )
    },
  },
})
