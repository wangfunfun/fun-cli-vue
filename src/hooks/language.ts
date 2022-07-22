import { useI18n } from 'vue-i18n'
import { useConfigStore } from '@/store/config'
import { i18nConfig } from '@/i18n'

const useLanguageHook = () => {
  const { locale, messages } = useI18n()

  const configStore = useConfigStore()

  const changeLanguage = (e: string) => {
    locale.value = e
    configStore.setLanguage({ alias: e, name: messages.value[e].languageName })
  }

  return {
    locale,
    messages,
    languageName: configStore.languageName,
    changeLanguage,
    configStore,
  }
}

export { useLanguageHook, i18nConfig }
