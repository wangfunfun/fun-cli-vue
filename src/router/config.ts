import router from './index'
import GeneralCache from '@/utils/general-cache'

// Reset the route

export function resetRouter() {
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).matcher
}

// route front-guard

router.beforeEach((to: any, from: any, next: any) => {
  const token: any = new GeneralCache('token', 'session').get()
  const requiresAuth = to.matched.some((item: any) => item.meta.requiresAuth)
  if (requiresAuth && !token) {
    next({
      path: '/login'
    })
    return
  }
  next()
})

// route resolution

router.beforeResolve(async (to) => {})

// route post-hook

router.afterEach((to, from) => {})

export default router
