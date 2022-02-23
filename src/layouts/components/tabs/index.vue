<script lang="ts" setup>
import { watch, onBeforeMount, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { IObject } from '@/@types/interface'
import { useRouteStore } from '@/store/route'
import { ADMIN_FIRST_PAGE } from '@/common/admin'
import { arrayRecursion } from '@/utils/data-treating'

const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const routeStore = useRouteStore()

const tab: any = reactive({
  tabList: [],
  nowTab: route.path,
  homeTab: {},
})

onBeforeMount(() => {
  tab.homeTab = arrayRecursion(
    'path',
    routeStore.allViewsRoutes,
    ADMIN_FIRST_PAGE
  )
  let { isFind, path } = findTab(route.path)
  if (isFind) {
    tab.nowTab = path
  } else {
    addTab(route)
  }
})

watch(
  () => route.path,
  () => {
    tab.nowTab = route.path
    let { isFind, path } = findTab(route.path)
    if (isFind) {
      tab.nowTab = path
    } else {
      addTab(route)
    }
  }
)

const findTab = (path: string) => {
  let res = { isFind: false, path: '', index: 0, length: 0 }
  if (tab.tabList.length > 0) {
    res.length = tab.tabList.filter((item: IObject, index: number) => {
      if (item.name == path) {
        res.path = path
        res.index = index
        return item
      }
    })
  }
  res.length == 0 ? (res.isFind = false) : (res.isFind = true)
  return res
}

const addTab = (data: IObject, isPushTab: boolean = false) => {
  tab.tabList.push({ label: data.meta.menuName, name: data.path })
  tab.nowTab = data.path
  if (isPushTab) router.push({ path: data.path })
}

const tabClick = (e: any) => {
  router.push({ path: e.props.name })
  tab.nowTab = e.props.name
}

const tabRemove = (e: string | number) => {
  if (tab.tabList.length == 1) return
  let { isFind, index } = findTab(e.toString())
  let nowTabRes = findTab(tab.nowTab)
  if (isFind) {
    tab.tabList.splice(index, 1)
    nowTabRes.index == index
      ? router.push({ path: tab.tabList[index - 1].name })
      : null
  }
}

const clickOperationMenu = (command: string | number | object) => {
  if (command == 'one') {
    tabRemove(tab.nowTab)
  } else if (command == 'other') {
    tab.nowTab = ''
    tab.tabList = []
    addTab(route)
  } else if (command == 'all') {
    tab.nowTab = ''
    tab.tabList = []
    addTab(tab.homeTab, true)
    // TODO
    // 路由变了，菜单没有变
  }
}
</script>

<template>
  <div class="slot flex-between">
    <el-tabs
      v-model="tab.nowTab"
      type="card"
      closable
      tab-position="top"
      @tab-click="tabClick"
      @tab-remove="tabRemove"
    >
      <el-tab-pane
        v-for="item in tab.tabList"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="operation">
      <el-dropdown @command="clickOperationMenu">
        <el-button size="small" type="primary">
          <span style="font-size: 12px">{{ t('btn.more') }}</span>
          <el-icon class="el-icon--right">
            <ArrowDown></ArrowDown>
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="one">{{
              t('btn.closeTag')
            }}</el-dropdown-item>
            <el-dropdown-item command="other">{{
              t('btn.closeOtherTag')
            }}</el-dropdown-item>
            <el-dropdown-item command="all">{{
              t('btn.closeAllTag')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  background-color: #fff !important;
  border-top: 1px solid #f6f6f6;
  padding: 0 20px;
}
:deep(.el-tabs__header) {
  background-color: #fff !important;
  border: none !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.el-tabs__item) {
  border-left: none !important;
}
:deep(.el-tabs__item.is-active) {
  border: none;
  border-bottom: 3px solid var(--el-color-primary) !important;
}
</style>
