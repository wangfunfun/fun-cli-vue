import { reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useConfigStore } from '@/store/config'
import GeneralCache from '@/utils/general-cache'
import { DEFAULT_LANGUAGE_ALIAS } from '@/common/constant'
import i18nConfig from '@/i18n/config'

const useLanguageHook = () => {

  const { locale, messages } = useI18n()

  const configStore = useConfigStore()

  const language = reactive({
    nowLanguage: computed(() => messages.value[locale.value || DEFAULT_LANGUAGE_ALIAS].languageName)
  })

  const selectLanguage = (e: any) => {
    locale.value = e
    configStore.setLanguage({
      alias: e,
      naiveuiLanguage: messages.value[e || DEFAULT_LANGUAGE_ALIAS].naiveuiLanguage,
      naiveuiDateLanguage: messages.value[e || DEFAULT_LANGUAGE_ALIAS].naiveuiDateLanguage
    })
  }

  onMounted(() => {
    locale.value = new GeneralCache('language', 'local').get()
  })

  return {
    nowLanguage: language.nowLanguage,
    selectLanguage,
    onMounted
  }
}

export { useLanguageHook, i18nConfig }
