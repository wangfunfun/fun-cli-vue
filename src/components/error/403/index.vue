<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="slot flex-center">
    <span class="code">403</span>
    <span class="info"> {{ t('error.Code403') }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
