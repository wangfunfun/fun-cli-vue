import router from './config'
import GeneralCache from '@/utils/cli-general-cache'

// 路由前置守卫

router.beforeEach((to: any, from: any, next: any) => {
  const token: any = new GeneralCache('token', 'session').get()
  const requiresAuth = to.matched.some((item: any) => item.meta.requiresAuth)
  if (requiresAuth && !token) {
    next({
      path: '/login',
    })
    return
  }
  next()
})

// 路由解析守卫

router.beforeResolve(async (to) => {})

// 路由后置守卫

router.afterEach((to, from) => {})

export default router
