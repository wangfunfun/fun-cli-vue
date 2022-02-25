import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/external',
    name: 'AdminExternal',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'CopyOutline',
      menuName: '外部页面',
      sort: 2,
    },
    children: [
      {
        path: '/admin/external/elementPlus',
        name: 'AdminExternalElementPlus',
        component: () => import('@/views/external/elementPlus.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'FastFoodOutline',
          menuName: 'ElementPlus',
          sort: 0,
        },
      },
      {
        path: '/admin/external/vite',
        name: 'AdminExternalVite',
        component: () => import('@/views/external/vite.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'FlashOutline',
          menuName: 'Vite文档',
          sort: 1,
        },
      },
      {
        path: '/admin/external/vue',
        name: 'AdminExternalVue',
        component: () => import('@/views/external/vue.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'LogoVue',
          menuName: 'Vue文档',
          sort: 2,
        },
      },
    ],
  },
]
