import { IObject } from '@/@types/interface'

/**
 * 内置字典（静态）
 */

// 类型
export const logTypeDicts: IObject = {
  dictType: 'log_type',
  dataList: [
    { dictLabel: '系统', dictValue: 0 },
    { dictLabel: '业务', dictValue: 1 },
    { dictLabel: '其他', dictValue: 2 },
  ],
}

// 人员
export const userTypeDicts: IObject = {
  dictType: 'user_type',
  dataList: [
    { dictLabel: '游客', dictValue: 0 },
    { dictLabel: '系统管理员', dictValue: 1 },
    { dictLabel: '演示账号', dictValue: 2 },
  ],
}
