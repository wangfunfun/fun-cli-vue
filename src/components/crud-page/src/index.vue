<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CrudPage',
})
</script>

<template>
  <div class="crud-page flex-center">
    <slot></slot>
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
