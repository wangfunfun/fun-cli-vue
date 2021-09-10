export default {
  path: '/status',
  name: 'Status',
  component: () => import('@/App.vue'),
  children: [
    // 401 - no access
    {
      path: '403',
      name: 'Status403',
      component: () => import('@/views/pages/status/403.vue')
    },
    // 404 - not found
    {
      path: '404',
      name: 'Status404',
      component: () => import('@/views/pages/status/404.vue')
    },
    // 500 - server error
    {
      path: '500',
      name: 'Status500',
      component: () => import('@/views/pages/status/500.vue')
    },
    // 502 - server upkeep
    {
      path: '503',
      name: 'Status503',
      component: () => import('@/views/pages/status/503.vue')
    }
  ]
}
