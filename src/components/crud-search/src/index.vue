<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CrudSearch',
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
