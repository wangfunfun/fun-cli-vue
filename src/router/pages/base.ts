import Index from '@/pages/index.vue'
import { APP_FIRST_ROUTE } from '@/common/config'

export default [
  {
    path: '/',
    component: Index,
    redirect: APP_FIRST_ROUTE,
    meta: { requiresAuth: false, layout: 'pages' },
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/pages/error/index.vue'),
    meta: { requiresAuth: false, layout: 'pages' },
  },
]
