import { ElMessage } from 'element-plus'
import router from './index'
import Storage from '../utils/storage'
import { useStore } from '../store'
const store = useStore()

/**
 * @name 重置路由
 */
export function resetRouter() {
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).matcher
}

/**
 * @name 路由权限配置
 * @beforeEach 前置守卫
 * @beforeResolve 解析守卫
 * @afterEach 后置钩子
 */

// 全局前置守卫
router.beforeEach((to: any, from, next) => {
  // 获取 token，是否需要校验登录状态，通过路由元信息获取
  const token: any = new Storage('TOKEN', 'session').get()
  const isLogin = to.matched.some((item: any) => item.meta.requiresAuth)
  // 没有登录状态
  if (isLogin && !token.save_data) {
    ElMessage.error('您还没有登录或登录状态已过期，请登录后重试！')
    next({
      path: '/login'
    })
  }
  // 已经登录的状态下
  if (token && to.path === '/login') {
    next({ path: '/home' })
  }
  // 404 not found
  if (!to.matched[0]) {
    next({ path: '/status/404' })
    return
  }
  next()
})

// 全局解析守卫
// 获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
router.beforeResolve(async (to) => {
})

// 全局后置钩子
router.afterEach((to, from) => {
  console.log(store)
  store.commit('layout/updateNowPath', to.meta.menuName)
})


export default router
