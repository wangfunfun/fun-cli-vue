import Index from '@/views/index.vue'
import { APP_FIRST_ROUTE } from '@/common/config'

export default [
  {
    path: '/',
    component: Index,
    redirect: APP_FIRST_ROUTE,
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/error/index.vue'),
    meta: { requiresAuth: false, layout: 'pages' },
  },
  {
    path: '/iframe:id?',
    name: 'Iframe',
    component: () => import('@/views/iframe/index.vue'),
    meta: { requiresAuth: false, layout: 'pages' },
  },
]
