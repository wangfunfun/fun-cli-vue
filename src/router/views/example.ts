import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/example',
    name: 'AdminExample',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'ExtensionPuzzleOutline',
      menuName: '功能示例',
      sort: 1,
    },
    children: [
      {
        path: '/admin/example/echarts',
        name: 'AdminExampleEcharts',
        component: () => import('@/views/example/echarts.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'PieChartOutline',
          menuName: 'Echarts图表',
          sort: 0,
        },
      },
      {
        path: '/admin/example/drag',
        name: 'AdminExampleDrag',
        component: () => import('@/views/example/drag.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'MoveOutline',
          menuName: '拖拽',
          sort: 1,
        },
      },
      {
        path: '/admin/example/editor',
        name: 'AdminExampleEditor',
        component: () => import('@/views/example/editor.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'NewspaperOutline',
          menuName: '富文本编辑器',
          sort: 2,
        },
      },
      {
        path: '/admin/example/form',
        name: 'AdminExampleForm',
        component: () => import('@/views/example/form.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'DocumentAttachOutline',
          menuName: '表单示例',
          sort: 3,
        },
      },
      {
        path: '/admin/example/table',
        name: 'AdminExampleTable',
        component: () => import('@/views/example/table.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'BrowsersSharp',
          menuName: '表格示例',
          sort: 4,
        },
      },
      {
        path: '/admin/example/upload',
        name: 'AdminExampleUpload',
        component: () => import('@/views/example/upload.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'CloudUploadOutline',
          menuName: '上传示例',
          sort: 5,
        },
      },
    ],
  },
]
