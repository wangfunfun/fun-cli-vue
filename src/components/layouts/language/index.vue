<script lang="ts" setup>
import { Hover } from '@/components/animation'
import { useLanguageHook, i18nConfig } from '@/hooks/language'

const language = useLanguageHook()
</script>

<template>
  <Hover>
    <template #content>
      <el-dropdown @command="language.changeLanguage">
        <el-button type="text">
          {{ language.configStore.languageName }}</el-button
        >
        <template #dropdown>
          <el-dropdown-menu v-for="(value, key) in i18nConfig" :key="key">
            <el-dropdown-item :command="key">{{ value }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </Hover>
</template>

<style lang="scss" scoped>
:deep(.el-button--text) {
  color: #303133;
}
</style>
