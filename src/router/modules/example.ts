import Layout from '@/views/layout/Layout.vue'

export default {
  path: '/example',
  name: 'Example',
  component: Layout,
  redirect: '/example/editor',
  meta: { requiresAuth: true, icon: 'el-icon-menu', menuName: '功能示例', sort: 2 },
  children: [
    // 富文本编辑器
    {
      path: 'editor',
      name: 'ExampleEditor',
      component: () => import('../../views/modules/example/editor.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '富文本编辑器' }
    },
    // 地图组件
    {
      path: 'map',
      name: 'ExampleMap',
      component: () => import('../../views/modules/example/map.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '地图示例' }
    },
    // 图表组件
    {
      path: 'charts',
      name: 'ExampleCharts',
      component: () => import('../../views/modules/example/charts.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '图表示例' }
    },
    // 上传组件
    {
      path: 'upload',
      name: 'ExampleUpload',
      component: () => import('../../views/modules/example/upload.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '上传示例' }
    },
    // 导出功能
    {
      path: 'export',
      name: 'ExampleExport',
      component: () => import('../../views/modules/example/export.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '导出功能' }
    },
    // CRUD处理
    {
      path: 'crud',
      name: 'ExampleCrud',
      component: () => import('../../views/modules/example/crud.vue'),
      meta: { requiresAuth: true, icon: '', menuName: 'CRUD处理' }
    },
    // 多层菜单
    {
      path: 'menu',
      name: 'ExampleMenu',
      component: () => import('../../views/modules/example/menu.vue'),
      meta: { requiresAuth: true, icon: '', menuName: '多层菜单' }
    }
  ]
}
