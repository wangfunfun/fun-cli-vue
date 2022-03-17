import { i18nConfig } from '@/i18n'
import { defineStore } from 'pinia'
import { APP_DEFAULT_LANGUAGE, APP_PINIA_STORAGE } from '@/common/config'
import GeneralCache from '@/utils/general-cache'
import { IObject } from '@/@types/interface'

const languageAlias: any = new GeneralCache('languageAlias', 'local').get()

interface configStateTypes {
  language: string
  languageName: string
  elementPlusConfig: IObject
  globalLoading: boolean
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
    language: languageAlias || APP_DEFAULT_LANGUAGE,
    languageName: i18nConfig[languageAlias || APP_DEFAULT_LANGUAGE],
    elementPlusConfig: {
      zIndex: 3000,
    },
    globalLoading: true,
  }),
  getters: {
    nowLanguage: (state) => {
      return state.language
    },
    nowLanguageName: (state) => {
      return state.languageName
    },
  },
  actions: {
    setLanguage(data: any) {
      this.language = data.alias
      this.languageName = data.name
      new GeneralCache('languageAlias', 'local').set(data.alias)
    },
    changeGlobalLoading(status: boolean) {
      this.globalLoading = status
    },
  },
})
