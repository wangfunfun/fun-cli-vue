// 模块化 types 定义
import layoutStateTypes from './layout/types'
import routeStateTypes from './route/types'
import vuexExampleStateTypes from './vuexExample/types'

export default interface RootStateTypes {
  [x: string]: any
}

// 根仓库 types
export interface AllStateTypes extends RootStateTypes {
  layout: any
  route: any
  layoutStateTypes: layoutStateTypes
  routeStateTypes: routeStateTypes
  vuexExampleStateTypes: vuexExampleStateTypes
}
