import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/external',
    name: 'AdminExternal',
    component: viewsLayout,
    meta: {
      isMenu: true,
      requiresAuth: true,
      icon: '',
      menuName: '外部页面',
      sort: 2,
    },
    children: [
      {
        path: '/admin/external/elementPlus',
        name: 'AdminExternalElementPlus',
        component: () => import('@/views/external/elementPlus.vue'),
        meta: {
          requiresAuth: true,
          icon: '',
          menuName: 'ElementPlus文档',
          sort: 0,
        },
      },
      {
        path: '/admin/external/vite',
        name: 'AdminExternalVite',
        component: () => import('@/views/external/vite.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'Vite文档', sort: 1 },
      },
      {
        path: '/admin/external/vue',
        name: 'AdminExternalVue',
        component: () => import('@/views/external/vue.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'Vue文档', sort: 2 },
      },
    ],
  },
]
