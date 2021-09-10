import Layout from '@/views/layout/Layout.vue'

export default {
  path: '/system',
  name: 'System',
  component: Layout,
  meta: { requiresAuth: true, icon: 'el-icon-s-tools', menuName: '系统设置', sort: 5 },
  redirect: '/system/log',
  children: [
    // 操作日志
    {
      path: 'log',
      name: 'SystemLog',
      component: () => import('../../views/modules/system/log.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '操作日志' }
    },
    // 默认配置
    {
      path: 'ops',
      name: 'SystemOps',
      component: () => import('../../views/modules/system/ops.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '默认配置' }
    },
    // 界面管理
    {
      path: 'layout',
      name: 'SystemLayout',
      component: () => import('../../views/modules/system/layout.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '界面管理' }
    },
    // 图标管理
    {
      path: 'icon',
      name: 'SystemIcon',
      component: () => import('../../views/modules/system/icon.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '图标管理' }
    },
    // 系统信息
    {
      path: 'info',
      name: 'SystemInfo',
      component: () => import('../../views/modules/system/info.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '系统信息' }
    }
  ]
}
