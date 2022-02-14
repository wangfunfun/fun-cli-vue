export default [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/pages/welcome.vue'),
    meta: { requiresAuth: false },
  },
]
