<script lang="ts">
/**
 * CRUD通用查询处理组件
 */
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'crud-search',
})
</script>

<template>
  <div class="crud-search">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.crud-search{
  width: calc(100% - 40px);
  background-color: #fff;
  padding: 20px;
}
</style>
