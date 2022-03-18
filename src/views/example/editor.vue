<script lang="ts" setup>
import Editor from '@/components/editor'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <CrudForm operate :title="t('example.editor.title')">
    <Editor :height="300"></Editor>
  </CrudForm>
</template>

<style lang="scss" scoped></style>
