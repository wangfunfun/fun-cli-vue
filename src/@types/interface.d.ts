export interface IObject<T = any> {
  [key: string]: T
}

export interface crudOptionsTypes {
  createdSearch?: boolean
  activatedSearch?: boolean
  searchUrl?: string
  deleteURL?: string
  exportURL?: string
  dataForm?: IObject
  dataList?: IObject[]
  order?: string
  orderField?: string
  page?: number
  limit?: number
  total?: number
  searchLoading?: boolean
  dataListSelections?: IObject[]
  addOrUpdateVisible?: boolean
  addOrUpdateDom?: IObject
  isPageSearch?: boolean
}

export interface crudMethodsTypes extends crudOptionsTypes, IObject {
  query: () => void
  crudSearch: () => void
  crudDelete: (id?: string, pid?: string) => Promise<any>
  crudInfo: (id?: string) => void
  crudExport: () => void
  crudAddOrUpdate: (id?: string) => void
  crudTableSelection: (list: IObject[]) => void
  pageSize: (pageIndex: number) => void
  pageCurrent: (pageIndex: number) => void
  pageSort: (sort: IObject) => void
  getDictLabel: (dictType: string, dictValue: number) => string | number
  formatDateTime: (datetime: Date, template?: string) => string | number
}
