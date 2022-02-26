<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { logTypeDicts, userTypeDicts } from '@/common/dict'
import { useCrudHook } from '@/hooks/crud'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    const state = reactive({
      searchUrl: '/sys/log/page',
      exportURL: '/sys/log/export',
      dataForm: {
        logType: '',
        operator: '',
        content: '',
      },
    })

    return {
      ...useCrudHook(state),
      ...toRefs(state),
      t,
      logTypeDicts,
      userTypeDicts,
    }
  },
})
</script>

<template>
  <CrudSearch>
    <el-form :inline="true" :model="dataForm">
      <el-form-item :label="t('system.log.content')">
        <el-input
          v-model="dataForm.content"
          :placeholder="
            t('crud.placeholder.input', { label: t('system.log.content') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('system.log.type')">
        <el-select v-model="dataForm.logType" clearable>
          <el-option :label="t('crud.info.all')" value=""></el-option>
          <el-option
            v-for="item in logTypeDicts.dataList"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="t('system.log.operator')">
        <el-select v-model="dataForm.operator" clearable>
          <el-option :label="t('crud.info.all')" value=""></el-option>
          <el-option
            v-for="item in userTypeDicts.dataList"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="crudSearch">{{
          t('crud.btn.search')
        }}</el-button>
        <el-button @click="query">{{ t('crud.btn.reset') }}</el-button>
        <el-button @click="crudExport">{{ t('crud.btn.export') }}</el-button>
      </el-form-item>
    </el-form>
  </CrudSearch>
  <CrudTable>
    <el-table :data="dataList">
      <el-table-column type="index" width="50" />
      <el-table-column prop="logType" :label="t('system.log.type')">
        <template #default="scope">
          {{ getDictLabel('log_type', scope.row.logType) }}
        </template>
      </el-table-column>
      <el-table-column prop="content" :label="t('system.log.content')" />
      <el-table-column prop="operator" :label="t('system.log.operator')">
        <template #default="scope">
          {{ getDictLabel('user_type', scope.row.operator) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        width="200"
        :label="t('system.log.operateTime')"
      >
        <template #default="scope">
          {{ formatDateTime(scope.row.createTime) }}
        </template>
      </el-table-column>
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
