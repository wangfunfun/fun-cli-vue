<script lang="ts" setup>
import { useLanguageHook, i18nConfig } from '@/hooks/language'

const language = useLanguageHook()
</script>

<template>
  <cli-btn-hover>
    <template #content>
      <el-dropdown @command="language.changeLanguage">
        <cli-svg-icon name="LanguageOutline"></cli-svg-icon>
        <template #dropdown>
          <el-dropdown-menu v-for="(value, key) in i18nConfig" :key="key">
            <el-dropdown-item :command="key">{{ value }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </cli-btn-hover>
</template>

<style lang="scss" scoped>
:deep(.el-button--text) {
  color: #303133;
}
</style>
