<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCrudHook } from '@/hooks/crud'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    const state = reactive({
      searchUrl: '/sys/dict/page',
      dataForm: {
        dictType: '',
        dictTypeName: '',
      },
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
  <crud-search>
    <el-form :inline="true" :model="dataForm">
      <el-form-item :label="t('system.dict.dictTypeName')">
        <el-input
          v-model="dataForm.dictTypeName"
          :placeholder="
            t('crud.placeholder.enter', {
              label: t('system.dict.dictTypeName'),
            })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('system.dict.dictType')">
        <el-input
          v-model="dataForm.dictType"
          :placeholder="
            t('crud.placeholder.enter', {
              label: t('system.dict.dictType'),
            })
          "
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="crudSearch">{{
          t('crud.btn.search')
        }}</el-button>
        <el-button @click="query">{{ t('crud.btn.reset') }}</el-button>
        <el-button type="success" @click="crudAddOrUpdate()">{{
          t('crud.btn.add')
        }}</el-button>
        <el-button type="danger" @click="crudDelete()">{{
          t('crud.btn.delete')
        }}</el-button>
      </el-form-item>
    </el-form>
  </crud-search>
  <crud-table>
    <el-table :data="dataList">
      <el-table-column type="index" width="50" />
      <el-table-column
        prop="dictTypeName"
        :label="t('system.dict.dictTypeName')"
      >
      </el-table-column>
      <el-table-column prop="dictType" :label="t('system.dict.dictType')">
        <template #default="scope">
          {{ getDictLabel('dict_type', scope.row.dictType) }}
        </template>
      </el-table-column>
      <el-table-column prop="dictRemark" :label="t('system.dict.dictRemark')">
      </el-table-column>
      <el-table-column
        prop="createTime"
        width="200"
        :label="t('crud.label.updateTime')"
      >
        <template #default="scope">
          {{ formatDateTime(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column :label="t('crud.label.operate')"> </el-table-column>
    </el-table>
  </crud-table>
  <crud-page
    :page="page"
    :limit="limit"
    :total="total"
    @size-change="pageSize"
    @current-change="pageCurrent"
  >
  </crud-page>
</template>

<style lang="scss" scoped></style>
