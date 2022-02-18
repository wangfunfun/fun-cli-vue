/**
 * CRUD增删改查钩子
 */

import { ADMIN_CRUD_GLOBAL } from '@/common/admin'

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

export { useCrudHook, ADMIN_CRUD_GLOBAL as crudConfig }
