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
import { defineComponent } from 'vue'
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
    // TODO 类型声明暂时有问题
    sizes: {
      type: Array,
      default: () => {
        return [10, 20, 50]
      },
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

    // const sizes: number[] = props.sizes

    return {
      small: props.small,
      page: props.page,
      limit: props.limit,
      total: props.total,
      // sizes,
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
      :page-size="limit"
      :total="total"
      :sizes="[10, 20, 50]"
      :layout="layout"
      @size-change="sizeChange"
      @current-change="currentChange"
      :hide-on-single-page="total === 0"
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
