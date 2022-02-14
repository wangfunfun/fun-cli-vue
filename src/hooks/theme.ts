/**
 * 切换主题钩子
 */

import { reactive, computed } from 'vue'
import { darkTheme } from 'naive-ui'
import { useConfigStore } from '@/store/config'

const useThemeHook = () => {
  const configStore = useConfigStore()

  const theme = reactive({
    nowTheme: computed(() => configStore.theme),
  })

  const setTheme = () => {
    configStore.setTheme(configStore.theme ? null : darkTheme)
  }

  return {
    nowTheme: theme.nowTheme,
    setTheme,
  }
}

export { useThemeHook }
