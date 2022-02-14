/**
 * CRUD增删改查钩子
 */

import { APP_CRUD_GLOBAL } from '@/common/config'

const useCrudHook = () => {
  const query = () => {}

  const crudFunctions = {
    crudSearch() {},
    crudDelete() {},
    crudInfo() {},
    crudExport() {},
    crudAddOrUpdate() {},
    crudTableSelection() {},
  }

  const pageFunctions = {
    pageSize() {},
    pageCurrent() {},
    pageSort() {},
  }

  return {
    query,
    ...crudFunctions,
    ...pageFunctions,
  }
}

export { useCrudHook, APP_CRUD_GLOBAL as crudConfig }
