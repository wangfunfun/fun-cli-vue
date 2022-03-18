import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/home',
    name: 'AdminHome',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'HomeOutline',
      menuName: '首页',
      sort: 0,
    },
    children: [
      {
        path: '/admin/home/workbench',
        name: 'AdminHomeWorkbench',
        component: () => import('@/views/home/workbench.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'LaptopOutline',
          menuName: '工作台',
          sort: 0,
        },
      },
      {
        path: '/admin/home/visual',
        name: 'AdminHomeVisual',
        component: () => import('@/views/home/visual.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'SpeedometerOutline',
          menuName: '仪表盘',
          sort: 1,
        },
      },
    ],
  },
]
