import pagesLayout from '@/layouts/pagesLayout/index.vue'

export default [
  {
    path: '/',
    name: 'Index',
    component: pagesLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
]
