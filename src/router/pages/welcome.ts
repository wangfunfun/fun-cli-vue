import homeLayout from '@/layouts/homeLayout/index.vue'

export default [
  {
    path: '/home',
    name: 'Home',
    component: homeLayout,
    children: [
      {
        path: 'welcome',
        name: 'HomeWelcome',
        component: () => import('@/pages/welcome.vue')
      }
    ]
  }
]
