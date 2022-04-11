import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/system',
    name: 'AdminSystem',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'ConstructOutline',
      menuName: '系统管理',
      sort: 4,
    },
    children: [
      {
        path: '/admin/system/log',
        name: 'AdminSystemLog',
        component: () => import('@/views/system/log.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'DocumentLockOutline',
          menuName: '操作日志',
          sort: 0,
        },
      },
      {
        path: '/admin/system/dict',
        name: 'AdminSystemDict',
        component: () => import('@/views/system/dict.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'BookOutline',
          menuName: '字典管理',
          sort: 1,
        },
      },
      {
        path: '/admin/system/menu',
        name: 'AdminSystemMenu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'MenuSharp',
          menuName: '菜单管理',
          sort: 2,
        },
      },
      {
        path: '/admin/system/upload',
        name: 'AdminSystemUpload',
        component: () => import('@/views/system/upload.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'CloudUploadOutline',
          menuName: '文件上传',
          sort: 3,
        },
      },
      {
        path: '/admin/system/job',
        name: 'AdminSystemJob',
        component: () => import('@/views/system/job.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'StopwatchOutline',
          menuName: '定时任务',
          sort: 4,
        },
      },
    ],
  },
]
