/**
 * 切换vue-i18n国家化语言钩子
 */

import { reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useConfigStore } from '@/store/config'
import GeneralCache from '@/utils/general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import i18nConfig from '@/i18n/config'

const useLanguageHook = () => {
  const { locale, messages } = useI18n()

  const configStore = useConfigStore()

  const language = reactive({
    nowLanguage: computed(
      () => messages.value[locale.value || APP_DEFAULT_LANGUAGE].languageName
    ),
  })

  const selectLanguage = (e: any) => {
    locale.value = e
    configStore.setLanguage({
      alias: e,
      naiveuiLanguage:
        messages.value[e || APP_DEFAULT_LANGUAGE].naiveuiLanguage,
      naiveuiDateLanguage:
        messages.value[e || APP_DEFAULT_LANGUAGE].naiveuiDateLanguage,
    })
  }

  onMounted(() => {
    locale.value = new GeneralCache('language', 'local').get()
  })

  return {
    nowLanguage: language.nowLanguage,
    selectLanguage,
    onMounted,
  }
}

export { useLanguageHook, i18nConfig }
