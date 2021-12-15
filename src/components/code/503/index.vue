<script lang="ts" setup>
/**
 * @name 503
 * component to code page
 */

import { NGradientText } from 'naive-ui'
import { useI18n } from 'vue-i18n'

// i8n

const { t } = useI18n()
</script>

<template>
  <div class="slot flex-center">
    <n-gradient-text type="success">
      <span class="code">503</span>
      <span class="info"> {{ t('code.503') }}</span>
    </n-gradient-text>
  </div>
</template>

<style lang="scss" scoped></style>
