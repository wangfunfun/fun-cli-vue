import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/about',
    name: 'AdminAbout',
    component: viewsLayout,
    meta: {
      isMenu: true,
      requiresAuth: true,
      icon: '',
      menuName: '关于',
      sort: 4,
    },
  },
]
