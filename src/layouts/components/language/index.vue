<script lang="ts" setup>
/**
 * @name language
 * a component to change language by vue-i18n
 */

import { NButton, NDropdown } from 'naive-ui'
import { Hover } from '@/components/animation'
import { useLanguageHook, i18nConfig } from '@/hooks/language'

const language = useLanguageHook()
</script>

<template>
  <Hover>
    <template #content>
      <n-dropdown
        trigger="click"
        :options="i18nConfig"
        @select="language.selectLanguage"
      >
        <n-button text size="large"> {{ language.nowLanguage }}</n-button>
      </n-dropdown>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>
