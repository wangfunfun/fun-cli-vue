import { useConfigStore } from '@/store/config'
import { useLanguageHook } from '@/hooks/language'
import GeneralCache from '@/utils/cli-general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import { useRoute } from 'vue-router'
import { APP_NAME } from '@/common/constant'

const useInitHook = () => {
  const configStore = useConfigStore()

  const route = useRoute()

  const languageAlias: any = new GeneralCache('languageAlias', 'local').get()
  const language = useLanguageHook()

  const initLoadingStatus = () => {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }

  const initSystem = () => {
    language.changeLanguage(languageAlias || APP_DEFAULT_LANGUAGE)
  }

  const initLayout = async () => {
    let isInit = await initLoadingStatus()
    if (!isInit) {
      configStore.changeGlobalLoading(false)
      return
    }
    configStore.changeGlobalLoading(true)
    await initSystem()

    setTimeout(() => {
      consoleWelcome()
      configStore.changeGlobalLoading(false)
    }, 1000)
  }

  // 输出欢迎语
  const consoleWelcome = () => {
    console.log(
      `
      =========================================
      === welcome to use ${APP_NAME}  ===
      =========================================
      `
    )
  }

  return {
    initLoadingStatus,
    initSystem,
    initLayout,
  }
}

export { useInitHook }
