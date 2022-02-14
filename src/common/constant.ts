/**
 * 系统常量
 */

// 缓存数据有效期，默认为7天
export const GENERAL_CACHE_EXPIRE: number = 60 * 60 * 24 * 7

// 缓存方法前缀别名，默认为 env 配置
export const GENERAL_CACHE_ALIAS: string = import.meta.env.VITE_APP_ALIAS_NAME

// 应用版本号，默认为 env 配置
export const APP_VERSION: any = import.meta.env.VITE_APP_VERSION

// 请求地址，默认为 env 配置
export const APP_BASE_URL: any = import.meta.env.VITE_APP_BASE_URL

// 应用名称，默认为 env 配置
export const APP_NAME: any = import.meta.env.VITE_APP_NAME
