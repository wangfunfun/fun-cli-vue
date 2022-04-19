<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="slot">
    <span class="code">500</span>
    <span class="info"> {{ t('error.Code500') }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
