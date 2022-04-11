import Router from '@/layouts/router.vue'

export default [
  {
    path: '/admin/role',
    name: 'AdminRole',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'KeyOutline',
      menuName: '权限管理',
      sort: 3,
    },
    children: [
      {
        path: '/admin/role/auth',
        name: 'AdminRoleAuth',
        component: () => import('@/views/role/auth.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'PeopleOutline',
          menuName: '角色管理',
          sort: 0,
        },
      },
      {
        path: '/admin/role/dept',
        name: 'AdminRoleDept',
        component: () => import('@/views/role/dept.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'GridOutline',
          menuName: '部门管理',
          sort: 1,
        },
      },
      {
        path: '/admin/role/post',
        name: 'AdminRolePost',
        component: () => import('@/views/role/post.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'IdCardOutline',
          menuName: '岗位管理',
          sort: 2,
        },
      },
      {
        path: '/admin/role/person',
        name: 'AdminRolePerson',
        component: () => import('@/views/role/person.vue'),
        meta: {
          layout: 'views',
          requiresAuth: true,
          iconType: 'cli',
          icon: 'PersonOutline',
          menuName: '用户管理',
          sort: 3,
        },
      },
    ],
  },
]
