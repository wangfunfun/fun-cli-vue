import { darkTheme } from 'naive-ui'
import { reactive, computed } from 'vue'
import { useConfigStore } from '@/store/config'

const useThemeHook = () => {
  const configStore = useConfigStore()

  const setTheme = () => {
    configStore.setTheme(configStore.theme ? null : darkTheme)
  }

  return {
    nowTheme: configStore.theme,
    setTheme
  }
}

export { useThemeHook }
