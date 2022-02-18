import Index from '@/pages/index.vue'
import pagesLayout from '@/layouts/pagesLayout/index.vue'
import { APP_FIRST_ROUTE } from '@/common/config'

export default [
  {
    path: '/',
    name: 'Index',
    component: pagesLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '/',
        component: Index,
        redirect: APP_FIRST_ROUTE,
        meta: { requiresAuth: false },
      },
      {
        path: '/error',
        name: 'Error',
        component: () => import('@/pages/error/index.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
]
