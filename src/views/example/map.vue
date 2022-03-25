<script lang="ts" setup>
import CliGaodeMap from '@/components/cli-gaode-map'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <crud-form :title="t('example.map.title')">
    <cli-gaode-map></cli-gaode-map>
  </crud-form>
</template>

<style lang="scss" scoped></style>
