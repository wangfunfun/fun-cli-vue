import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    menuName: '系统设置',
    component: viewsLayout,
    meta: { isMenu: true, requiresAuth: true, icon: '', menuName: '系统设置', sort: 0 },
    children: [
      {
        path: 'workbench',
        name: 'AdminDashboardWorkbench',
        component: () => import('@/views/dashboard/workbench.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '工作台', sort: 0 }
      },
      {
        path: 'visual',
        name: 'AdminDashboardVisual',
        component: () => import('@/views/dashboard/visual.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '仪表盘', sort: 1 }
      }
    ]
  }
]
