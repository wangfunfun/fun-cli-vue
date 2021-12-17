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
        meta: { requiresAuth: false }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/code',
        name: 'Code',
        component: () => import('@/pages/code.vue'),
        meta: { requiresAuth: false }
      }
    ]
  }
]
