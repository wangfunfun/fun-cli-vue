// 模块化 types 定义
import layoutStateTypes from './layout/types'
import tagsStateTypes from './tags/types'
import routeStateTypes from './route/types'
import userStateTypes from './user/types'

export default interface RootStateTypes {
  [x: string]: any
}

// 根仓库 types
export interface AllStateTypes extends RootStateTypes {
  layout: any
  route: any
  tags: any
  user: any
  layoutStateTypes: layoutStateTypes
  tagsStateTypes: tagsStateTypes
  routeStateTypes: routeStateTypes
  userStateTypes: userStateTypes
}
