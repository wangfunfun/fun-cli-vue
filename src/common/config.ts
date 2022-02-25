/**
 * 应用配置
 */

// 缓存数据有效期，默认为7天
export const GENERAL_CACHE_EXPIRE: number = 60 * 60 * 24 * 7

// 应用首路由
export const APP_FIRST_ROUTE: string = '/welcome'

// 应用默认语言
export const APP_DEFAULT_LANGUAGE: string = 'enUS'

// pinia 数据持久化的方式，0为 sessionStorage， 1为 localStorage
export const APP_PINIA_STORAGE: Storage = sessionStorage

// 是否开启 keepAlive
export const APP_KEEP_ALIVE: boolean = true
