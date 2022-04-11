<script lang="ts">
/**
 * CRUD文件/图片上传通用组件
 * @mode 模式
 */
import { defineComponent, ref } from 'vue'
import CrudUploadImages from './components/images.vue'
import CrudUploadFiles from './components/files.vue'

export default defineComponent({
  name: 'crud-upload',
  components: {
    CrudUploadImages,
    CrudUploadFiles,
  },
  props: {
    mode: {
      type: String,
      default: 'files',
    },
  },
})
</script>

<template>
  <div>
    <CrudUploadImages v-if="mode == 'images'"></CrudUploadImages>
    <CrudUploadFiles v-if="mode == 'files'"></CrudUploadFiles>
  </div>
</template>

<style lang="scss" scoped></style>
