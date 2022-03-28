<script lang="ts">
/**
 * CRUD通用分页处理组件
 * @small 是否是小型分页
 * @page 页码
 * @limit 单页数量
 * @total 总数
 * @sizes 分页大小
 * @layout 布局
 * @align 对齐方向
 */
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'crud-page',
  props: {
    small: {
      type: Boolean,
      default: true,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    sizes: {
      type: Array,
      default: [10, 20, 50],
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    align: {
      type: String,
      default: 'center',
    },
  },
  emits: ['sizeChange', 'currentChange'],
  setup(props, { emit }) {
    const sizeChange = () => {
      emit('sizeChange')
    }

    const currentChange = () => {
      emit('currentChange')
    }

    const align = () => {
      return {
        display: 'flex',
        justifyContent: props.align,
        alignItems: 'center',
      }
    }

    return {
      small: props.small,
      page: props.page,
      limit: props.limit,
      total: props.total,
      sizes: props.sizes,
      layout: props.layout,
      sizeChange,
      currentChange,
      align,
    }
  },
})
</script>

<template>
  <div class="crud-page" :style="align()">
    <el-pagination
      :small="small"
      :current-page="page"
      :page-sizes="sizes"
      :page-size="limit"
      :total="total"
      :layout="layout"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.crud-page {
  width: calc(100% - 40px);
  background-color: #fff;
  padding: 20px;
  padding-top: 40px;
}
</style>
