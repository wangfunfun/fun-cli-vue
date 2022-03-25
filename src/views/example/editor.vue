<script lang="ts" setup>
import CliEditor from '@/components/cli-editor'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <crud-form :title="t('example.editor.title')">
    <cli-editor></cli-editor>
  </crud-form>
</template>

<style lang="scss" scoped></style>
