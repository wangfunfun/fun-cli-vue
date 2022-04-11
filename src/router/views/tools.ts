import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/tools',
    name: 'AdminTools',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'TerminalOutline',
      menuName: '开发工具',
      sort: 5,
    },
    children: [
      {
        path: '/admin/tools/code',
        name: 'AdminToolsCode',
        component: () => import('@/views/tools/code.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'CodeDownloadOutline',
          menuName: '代码生成',
          sort: 0,
        },
      },
      {
        path: '/admin/tools/form',
        name: 'AdminToolsForm',
        component: () => import('@/views/tools/form.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'CodeSlashOutline',
          menuName: '表单设计',
          sort: 2,
        },
      },
      {
        path: '/admin/tools/options',
        name: 'AdminToolsOptions',
        component: Router,
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'CubeOutline',
          menuName: '参数配置',
          sort: 3,
        },
        children: [
          {
            path: '/admin/tools/source',
            name: 'AdminToolsSource',
            component: () => import('@/views/tools/source.vue'),
            meta: {
              layout: 'views',
              requiresAuth: true,
              iconType: 'cli',
              icon: 'ServerOutline',
              menuName: '数据源配置',
              sort: 0,
            },
          },
          {
            path: '/admin/tools/field',
            name: 'AdminToolsField',
            component: () => import('@/views/tools/field.vue'),
            meta: {
              layout: 'views',
              requiresAuth: true,
              iconType: 'cli',
              icon: 'TextOutline',
              menuName: '字段管理',
              sort: 1,
            },
          },
          {
            path: '/admin/tools/template',
            name: 'AdminToolsTemplate',
            component: () => import('@/views/tools/template.vue'),
            meta: {
              layout: 'views',
              requiresAuth: true,
              iconType: 'cli',
              icon: 'AlbumsOutline',
              menuName: '模板管理',
              sort: 2,
            },
          },
        ],
      },
    ],
  },
]
