import { IObject } from '@/@types/interface'

/**
 * 管理系统配置
 */

// 管理系统 layout 默认布局
export const ADMIN_LAYOUT_MODE: string = 'leftMenu'

// 管理系统 是否启用 vue-router 模式
export const ADMIN_MENU_IS_ROUTER: boolean = true

// 管理系统 是否只展开一个菜单
export const ADMIN_MENU_ONLY: boolean = true

// 管理系统首页
export const ADMIN_FIRST_PAGE: string = '/admin/home/workbench'

// 管理系统 菜单默认展开（仅在 leftMenu 生效）
export const ADMIN_MENU_UNFOLD: boolean = true

// crud 全局配置
export const ADMIN_CRUD_GLOBAL: IObject = {}
