import { IObject } from '@/@types/interface'

/**
 * 获取字典名称
 * @param dictType  字典类型
 * @param dictValue  字典值
 */

export const getDictLabel = (
  list: IObject[],
  dictType: string,
  dictValue: number
): string | number => {
  const type = list.find((element: IObject) => element.dictType === dictType)
  if (type) {
    const val = type.dataList.find(
      (element: IObject) => element.dictValue === dictValue
    )
    if (val) {
      return val.dictLabel
    } else {
      return dictValue
    }
  } else {
    return dictValue
  }
}
