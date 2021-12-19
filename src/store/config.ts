import { defineStore } from 'pinia'
import GeneralCache from '@/utils/general-cache'

interface configStateTypes {
  theme: any
  language: any
  viewsLayout: object
}

export const useConfigStore = defineStore({
  id: 'configStore',
  state: (): configStateTypes => ({
    theme: new GeneralCache('theme', 'local').get(),
    language: new GeneralCache('language', 'local').get(),
    viewsLayout: new GeneralCache('language', 'local').get()
  }),
  getters: {
    theme() {
      return this.theme
    },
    language() {
      return this.language
    },
    viewsLayout() {
      return this.viewsLayout
    }
  },
  actions: {
    setTheme: (data) => {
      this.theme = data
      new GeneralCache('theme', 'local').set(data.alias)
    },
    setLanguage: (data) => {
      this.language = data
      new GeneralCache('language', 'local').set(data.alias)
      new GeneralCache('naiveuiLanguage', 'local').set(data.naiveuiLanguage)
      new GeneralCache('naiveuiDateLanguage', 'local').set(data.naiveuiDateLanguage)
    }
  }
})
