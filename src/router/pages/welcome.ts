import pagesLayout from '@/layouts/pagesLayout/index.vue'

export default [
  {
    path: '/',
    name: 'Index',
    component: pagesLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/pages/welcome.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
]
