/**
 * 用户操作相关钩子函数
 */

import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/user'

const useUserHook = () => {
  const { t } = useI18n()

  const userStore = useUserStore()

  const logout = () => {}

  const login = () => {}

  const getUserInfo = () => {}

  const lock = () => {}

  const unlock = () => {}

  return {
    userStore,
    logout,
    login,
    getUserInfo,
    lock,
    unlock,
  }
}

export { useUserHook }
