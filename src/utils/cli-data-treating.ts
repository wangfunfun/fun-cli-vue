import { IObject } from '@/@types/interface'

/**
 * Array 递归查找
 * @param key
 * @param array
 * @returns
 */

export const arrayRecursion = (
  key: string,
  array: IObject[],
  validateKey: string,
  childrenKey: string = 'children'
) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] && array[i][key] == validateKey) return array[i]
    if (array[i][childrenKey]) {
      let res: unknown = arrayRecursion(key, array[i][childrenKey], validateKey)
      if (res) return res
    }
  }
}

/**
 * 获取对象下的字段值
 * @param record {}
 * @param key 'a.b.c'
 * @param defaultValue
 * @returns
 */
export const getValueByKeys = (
  record: IObject = {},
  key: string,
  defaultValue?: unknown
): any => {
  const keys = key.split('.')
  for (let i = 0; i < keys.length; i++) {
    record = record[keys[i]] || (i === keys.length - 1 ? defaultValue : {})
  }
  return record || defaultValue
}
