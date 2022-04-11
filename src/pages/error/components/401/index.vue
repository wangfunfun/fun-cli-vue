<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="slot flex-center">
    <span class="code">401</span>
    <span class="info"> {{ t('error.Code401') }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
