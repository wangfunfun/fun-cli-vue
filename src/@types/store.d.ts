export interface configStateTypes {
  theme: any
  language: any
  adminLayout: object
}

export interface routeStateTypes {
  pagesRoutes: any
  viewsRoutes: any
  allRoutes: any
}

export interface tagStateTypes {}

export interface userStateTypes {}

export interface rootStateTypes {
  [x: string]: any
}

export interface allStateTypes extends rootStateTypes {
  layout: any
  route: any
  tags: any
  user: any
  configStateTypes: configStateTypes
  tagStateTypes: tagStateTypes
  routeStateTypes: routeStateTypes
  userStateTypes: userStateTypes
}
