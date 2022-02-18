import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/system',
    name: 'AdminSystem',
    component: viewsLayout,
    meta: { isMenu: true, requiresAuth: true, icon: '', menuName: '系统', sort: 3 },
    children: [
      {
        path: '/admin/system/log',
        name: 'AdminSystemLog',
        component: () => import('@/views/system/log.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '操作日志', sort: 0 }
      },
      {
        path: '/admin/system/dict',
        name: 'AdminSystemDict',
        component: () => import('@/views/system/dict.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '字典管理', sort: 1 }
      },
      {
        path: '/admin/system/menu',
        name: 'AdminSystemMenu',
        component: () => import('@/views/system/menu.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '菜单管理', sort: 2 }
      },
      {
        path: '/admin/system/role',
        name: 'AdminSystemRole',
        component: () => import('@/views/system/role.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '权限管理', sort: 3 }
      }
    ]
  }
]
