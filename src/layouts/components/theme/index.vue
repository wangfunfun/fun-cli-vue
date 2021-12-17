<script lang="ts" setup>
/**
 * @name theme
 * a component to change system theme
 */

import { NButton } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { Hover } from '@/components/animation'
import { useThemeHook } from '@/hooks/theme'

const theme = useThemeHook()

const { t } = useI18n()
</script>

<template>
  <Hover>
    <template #content>
      <n-button @click="theme.setTheme()" text size="large">{{
        theme.nowTheme ? t('btn.darkTheme') : t('btn.lightTheme')
      }}</n-button>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>
