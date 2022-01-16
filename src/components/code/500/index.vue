<script lang="ts" setup>
import { NGradientText } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="slot flex-center">
    <n-gradient-text type="success">
      <span class="code">500</span>
      <span class="info"> {{ t('code.500') }}</span>
    </n-gradient-text>
  </div>
</template>

<style lang="scss" scoped></style>
