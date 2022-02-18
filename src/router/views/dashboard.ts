import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: viewsLayout,
    meta: {
      isMenu: true,
      requiresAuth: true,
      icon: '',
      menuName: '首页',
      sort: 0,
    },
    children: [
      {
        path: '/admin/dashboard/workbench',
        name: 'AdminDashboardWorkbench',
        component: () => import('@/views/dashboard/workbench.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '工作台', sort: 0 },
      },
      {
        path: '/admin/dashboard/visual',
        name: 'AdminDashboardVisual',
        component: () => import('@/views/dashboard/visual.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '仪表盘', sort: 1 },
      },
    ],
  },
]
