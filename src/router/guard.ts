import router from './config'

// 路由前置守卫

router.beforeEach((to: any, from: any, next: any) => {
  next()
})

// 路由解析守卫

router.beforeResolve(async (to) => {})

// 路由后置守卫

router.afterEach((to, from) => {})

export default router
