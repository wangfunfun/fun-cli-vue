import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/document',
    name: 'AdminDocument',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'CopyOutline',
      menuName: '文档',
      sort: 2,
    },
    children: [
      {
        path: '/admin/document/elementPlus',
        name: 'AdminDocumentElementPlus',
        component: () => import('@/views/document/elementPlus.vue'),
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
        path: '/admin/document/vite',
        name: 'AdminDocumentVite',
        component: () => import('@/views/document/vite.vue'),
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
        path: '/admin/document/vue',
        name: 'AdminDocumentVue',
        component: () => import('@/views/document/vue.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'LogoVue',
          menuName: 'Vue文档',
          sort: 2,
        },
      },
      {
        path: '/admin/document/icon',
        name: 'AdminDocumentIcon',
        component: () => import('@/views/document/icon.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'FlowerOutline',
          menuName: 'XIcons图标',
          sort: 2,
        },
      },
    ],
  },
]
