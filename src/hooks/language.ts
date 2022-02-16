/**
 * 切换vue-i18n国际化语言钩子
 */

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useConfigStore } from '@/store/config'
import { i18nConfig } from '@/i18n'

const useLanguageHook = () => {
  const { locale, messages } = useI18n()

  const configStore = useConfigStore()

  const languageName = ref(configStore.languageName)

  const changeLanguage = (e: string) => {
    locale.value = e
    configStore.setLanguage({ alias: e, name: messages.value[e].languageName })
  }

  return {
    locale,
    messages,
    languageName,
    changeLanguage,
    configStore,
  }
}

export { useLanguageHook, i18nConfig }
