import { i18nConfig } from '@/i18n'
import { defineStore } from 'pinia'
import { APP_DEFAULT_LANGUAGE, APP_PINIA_STORAGE } from '@/common/config'
import GeneralCache from '@/utils/general-cache'
import { IObject } from '@/@types/interface'

const language: any = new GeneralCache('languageAlias', 'local').get()

interface configStateTypes {
  language: string
  languageName: string
  elementPlusConfig: IObject
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
    language: language || APP_DEFAULT_LANGUAGE,
    languageName: i18nConfig[language || APP_DEFAULT_LANGUAGE],
    elementPlusConfig: {
      zIndex: 3000,
    },
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
  },
})
