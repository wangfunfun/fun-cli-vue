/**
 * 系统初始化钩子函数
 */

import { useRouteStore } from '@/store/route'
import { useConfigStore } from '@/store/config'
import { pagesRoutes, viewsRoutes, allRoutes } from '@/router/config'
import { useLanguageHook } from '@/hooks/language'
import GeneralCache from '@/utils/cli-general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import { useRoute } from 'vue-router'
import { APP_NAME } from '@/common/constant'

const useInitHook = () => {
  const routeStore = useRouteStore()
  const configStore = useConfigStore()

  const route = useRoute()

  const languageAlias: any = new GeneralCache('languageAlias', 'local').get()
  const language = useLanguageHook()

  // 检查是否需要进行初始化
  const initLoadingStatus = () => {
    return new Promise((resolve, reject) => {
      // TODO 检查项
      resolve(true)
    })
  }

  // 初始化 system
  const initSystem = () => {
    routeStore.setPagesRoutes(pagesRoutes)
    routeStore.setViewsRoutes(viewsRoutes)
    routeStore.setAllRoutes(allRoutes)
    language.changeLanguage(languageAlias || APP_DEFAULT_LANGUAGE)
  }

  // 初始化 layout
  const initLayout = async () => {
    let isInit = await initLoadingStatus()
    if (!isInit) {
      configStore.changeGlobalLoading(false)
      return
    }
    configStore.changeGlobalLoading(true)
    await initSystem()

    if (route.meta?.layout === 'pages') {
    } else if (route.meta?.layout === 'views') {
      await routeStore.getAsyncViewsRoutes()
    }

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
