import Layout from '@/views/layout/Layout.vue'

export default {
  path: '/user',
  name: 'User',
  component: Layout,
  meta: { requiresAuth: true, icon: 'el-icon-s-custom', menuName: '用户管理', sort: 4 },
  redirect: '/user/list',
  children: [
    // 用户列表
    {
      path: 'list',
      name: 'UserList',
      component: () => import('../../views/modules/user/list.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '用户列表' }
    },
    // 用户权限
    {
      path: 'role',
      name: 'UserRole',
      component: () => import('../../views/modules/user/role.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '权限配置' }
    }
  ]
}
