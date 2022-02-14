import Index from '@/pages/index.vue'
import pagesLayout from '@/layouts/pagesLayout/index.vue'

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
        redirect: '/welcome',
        meta: { requiresAuth: false },
      },
      {
        path: '/error',
        name: 'Error',
        component: () => import('@/pages/error.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
]
