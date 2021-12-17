import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/external',
    name: 'AdminExternal',
    component: viewsLayout,
    meta: { isMenu: true, requiresAuth: true, icon: '', menuName: '外部页面', sort: 2 },
    children: [
      {
        path: 'naive',
        name: 'AdminExternalNaive',
        component: () => import('@/views/external/naive.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'NaiveUI文档', sort: 0 }
      },
      {
        path: 'vite',
        name: 'AdminExternalVite',
        component: () => import('@/views/external/vite.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'Vite文档', sort: 1 }
      },
      {
        path: 'vue',
        name: 'AdminExternalVue',
        component: () => import('@/views/external/vue.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'Vue文档', sort: 2 }
      }
    ]
  }
]
