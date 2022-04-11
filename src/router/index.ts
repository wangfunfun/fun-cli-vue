import router from './guard'

// 导出路由

export default router

// 重置路由

export function resetRouter() {
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).matcher
}
