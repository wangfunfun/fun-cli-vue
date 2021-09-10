import Layout from '@/views/layout/Layout.vue'

export default {
  path: '/utils',
  name: 'Utils',
  component: Layout,
  meta: { requiresAuth: true, icon: 'el-icon-s-cooperation', menuName: '工具函数', sort: 3 },
  redirect: '/utils/format',
  children: [
    // format.ts 格式化
    {
      path: 'format',
      name: 'UtilsFormat',
      component: () => import('../../views/modules/utils/format.vue'),
      meta: { requiresAuth: true, icon: '', menuName: 'format.ts 格式化' }
    }
  ]
}
