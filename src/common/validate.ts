/**
 * 常用校验格式
 */

// 邮箱
export const email = (value: string): boolean => {
  return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    value
  )
}

// 手机号码
export const phone = (value: string): boolean => {
  return /^1[0-9]{10}$/.test(value)
}

// 电话号码
export const tel = (value: string): boolean => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value)
}

// http
export const http = (value: string): boolean => {
  return /^http[s]?:\/\/.*/.test(value)
}

// 正整数
export const number = (value: string): boolean => {
  return /^\+?[1-9][0-9]*$/.test(value)
}
