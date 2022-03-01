import { IObject, crudMethodsTypes, crudOptionsTypes } from '@/@types/interface'
import { ADMIN_CRUD_GLOBAL } from '@/common/admin'
import { onActivated, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/user'
import { getDictLabel } from '@/utils/dict'
import FormatDateTime from '@/utils/format-dateTime'

/**
 * 通用CRUD增删改查钩子
 * @param props 自定义通用业务state
 * @returns 返回响应式自定义state和通用方法
 */

const useCrudHook = (props: crudOptionsTypes | IObject): crudMethodsTypes => {
  const { t } = useI18n()
  const userStore = useUserStore()

  const mergeOptionsToPageState = (
    options: IObject,
    props: IObject
  ): crudOptionsTypes => {
    for (const key in options) {
      if (!Object.getOwnPropertyDescriptor(props, key)) {
        props[key] = options[key]
      }
    }
    return props
  }

  const crudOptions: crudOptionsTypes = {
    // 页面是否在I创建时,调用crudSearch()方法
    createdSearch: true,
    // 此页面是否在激活（进入）时，调用crudSearch()方法
    activatedSearch: false,
    // crudSearch()方法接口，API地址
    searchUrl: '',
    // crudDelete()方法接口，API地址
    deleteURL: '',
    // crudExport()方法接口，API地址
    exportURL: '',
    // 查询条件
    dataForm: {},
    // 查询结果
    dataList: [],
    // 查询顺序，asc／desc
    order: '',
    // 查询顺序，字段
    orderField: '',
    // 分页查询，当前页码
    page: 1,
    // 分页查询，每页数
    limit: 10,
    // 分页查询，总条数
    total: 0,
    // 数据列表的loading状态
    searchLoading: false,
    // 数据列表的多选数据
    dataListSelections: [],
    // 新增／更新，弹窗visible状态
    addOrUpdateVisible: false,
    // 新增／更新，组件DOM
    addOrUpdateDom: {},
    // 是否是分页查询
    isPageSearch: true,
  }

  const state = mergeOptionsToPageState(crudOptions, props)

  onMounted(() => {
    if (state.createdSearch && !state.activatedSearch) {
      query()
    }
  })

  onActivated(() => {
    if (state.activatedSearch) {
      query()
    }
  })

  // 查询，重置查询
  const query = () => {
    state.limit = props.limit ? props.limit : state.limit
    state.page = props.page ? props.page : state.page
    state.dataForm = props.dataForm ? props.dataForm : state.dataForm
    crudFunctions.crudSearch()
  }

  const crudFunctions = {
    // 查询方法
    crudSearch() {
      if (!state.searchUrl) {
        return
      }
      state.searchLoading = true
      state.searchLoading = false
    },

    // 删除方法
    crudDelete(id?: string, pid?: string): Promise<any> {
      return new Promise((resolve, reject) => {
        if (
          !id &&
          state.dataListSelections &&
          state.dataListSelections.length <= 0
        ) {
          ElMessage({
            message: t('crud.btn.delete'),
            type: 'warning',
            duration: 500,
          })
          return
        }
        ElMessageBox.confirm(
          t('crud.info.confirm', { handle: t('crud.btn.delete') }),
          t('crud.info.prompt'),
          {
            confirmButtonText: t('crud.btn.confirm'),
            cancelButtonText: t('crud.btn.cancel'),
            type: 'warning',
          }
        )
          .then(() => {})
          .catch(() => {})
      })
    },

    // 详情方法
    crudInfo(id?: string) {},

    // 导出方法
    crudExport() {},

    // 新增／更新
    crudAddOrUpdate(id?: string) {},

    // table 多选回调
    crudTableSelection(list: IObject[]) {},
  }

  const pageFunctions = {
    // 切换单页数
    pageSize(pageIndex: number) {},

    // 切换页码
    pageCurrent(pageIndex: number) {},

    // 分页排序
    pageSort(sort: IObject) {},
  }

  const utilsFunction = {
    // 取字典
    getDictLabel(dictType: string, dictValue: number) {
      return getDictLabel(userStore.dicts, dictType, dictValue)
    },

    // 日期时间格式化
    formatDateTime(datetime: Date, template?: string) {
      return new FormatDateTime(new Date(datetime), template).format()
    },
  }

  return {
    query,
    ...crudFunctions,
    ...pageFunctions,
    ...utilsFunction,
    ...state,
  }
}

export { useCrudHook, ADMIN_CRUD_GLOBAL as crudConfig }
