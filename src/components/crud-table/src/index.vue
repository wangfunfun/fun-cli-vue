<script lang="ts">
/**
 * CRUD通用表格处理组件
 */
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'crud-table',
})
</script>

<template>
  <div class="crud-table">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.crud-table {
  width: calc(100% - 40px);
  background-color: #fff;
  padding: 20px;
}
</style>
