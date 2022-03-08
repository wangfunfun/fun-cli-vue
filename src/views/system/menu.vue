<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCrudHook } from '@/hooks/crud'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    const state = reactive({
      searchUrl: '/sys/menu/list',
      dataForm: {},
    })

    return {
      ...useCrudHook(state),
      ...toRefs(state),
      t,
    }
  },
})
</script>

<template>
  <CrudSearch>
    <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-button type="success" @click="crudAddOrUpdate()">{{
          t('crud.btn.add')
        }}</el-button>
      </el-form-item>
    </el-form>
  </CrudSearch>
  <CrudTable>
    <el-table :data="dataList">
      <el-table-column type="index" width="50" />
      <el-table-column prop="menuName" :label="t('system.menu.menuName')">
      </el-table-column>
      <el-table-column prop="iconName" :label="t('system.menu.iconName')">
      </el-table-column>
      <el-table-column prop="sort" :label="t('system.menu.sort')">
      </el-table-column>
      <el-table-column prop="route" :label="t('system.menu.route')">
      </el-table-column>
      <el-table-column prop="role" :label="t('system.menu.role')">
      </el-table-column>
      <el-table-column :label="t('crud.label.operate')"> </el-table-column>
    </el-table>
  </CrudTable>
  <CrudPage>
    <el-pagination
      small
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="limit"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="pageSize"
      @current-change="pageCurrent"
    >
    </el-pagination>
  </CrudPage>
</template>

<style lang="scss" scoped></style>
