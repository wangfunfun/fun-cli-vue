import viewsLayout from '@/layouts/viewsLayout/index.vue'

export default [
  {
    path: '/admin/example',
    name: 'AdminExample',
    component: viewsLayout,
    meta: { isMenu: true, requiresAuth: true, icon: '', menuName: '功能示例', sort: 1 },
    children: [
      {
        path: 'echarts',
        name: 'AdminExampleEcharts',
        component: () => import('@/views/example/echarts.vue'),
        meta: { requiresAuth: true, icon: '', menuName: 'Echarts图表', sort: 0 }
      },
      {
        path: 'drag',
        name: 'AdminExampleDrag',
        component: () => import('@/views/example/drag.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '拖拽', sort: 1 }
      },
      {
        path: 'editor',
        name: 'AdminExampleEditor',
        component: () => import('@/views/example/editor.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '富文本编辑器', sort: 2 }
      },
      {
        path: 'form',
        name: 'AdminExampleForm',
        component: () => import('@/views/example/form.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '表单示例', sort: 3 }
      },
      {
        path: 'table',
        name: 'AdminExampleTable',
        component: () => import('@/views/example/table.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '表格示例', sort: 4 }
      },
      {
        path: 'upload',
        name: 'AdminExampleUpload',
        component: () => import('@/views/example/upload.vue'),
        meta: { requiresAuth: true, icon: '', menuName: '上传示例', sort: 5 }
      }
    ]
  }
]
