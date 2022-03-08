export default [
  {
    path: '/admin/about',
    name: 'AdminAbout',
    component: () => import('@/views/about.vue'),
    meta: {
      layout: 'views',
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'InformationCircleOutline',
      menuName: '关于',
      sort: 5,
    },
  },
]
