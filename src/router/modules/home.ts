import Layout from '@/views/layout/Layout.vue'

export default {
  // 管理系统首页
  path: '/home',
  name: 'Home',
  component: Layout,
  meta: { requiresAuth: true, icon: 'el-icon-s-platform', menuName: '首页', sort: 1 }
}
