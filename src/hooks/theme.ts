// 切换主题钩子函数

import { darkTheme } from 'naive-ui'
import { useConfigStore } from '@/store/config'

const useThemeHook = () => {
  const configStore = useConfigStore()

  const setTheme = () => {
    configStore.setTheme(configStore.theme ? null : darkTheme)
  }

  return {
    nowTheme: configStore.theme,
    setTheme,
  }
}

export { useThemeHook }
