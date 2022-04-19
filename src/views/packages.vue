<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import packageJson from '../../package.json'

const { t } = useI18n()
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="title">{{ t('btn.about') }}</div>
    </template>
    <div>{{ t('welcome.description') }}</div>
  </el-card>

  <el-card style="margin-top: 20px" shadow="never">
    <template #header>
      <div class="title">{{ t('info.project') }}</div>
    </template>
    <el-descriptions border>
      <el-descriptions-item :label="t('info.name')">
        {{ packageJson.name }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('info.version')">
        {{ packageJson.version }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('info.buildTime')">
        {{ packageJson.updateTime }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('info.githubAddress')">
        <a
          target="_blank"
          href="https://gitee.com/wangqf19/cli-vue3-vite2-ts"
          >{{ t('info.githubUrl') }}</a
        >
      </el-descriptions-item>
      <el-descriptions-item :label="t('info.giteeAddress')">
        <a
          target="_blank"
          href="https://gitee.com/wangqf19/cli-vue3-vite2-ts"
          >{{ t('info.giteeUrl') }}</a
        >
      </el-descriptions-item>
      <el-descriptions-item :label="t('info.preview')">
        <a
          target="_blank"
          href="https://wangqf19.github.io/cli-vue3-vite2-ts/"
          >{{ t('info.previewUrl') }}</a
        >
      </el-descriptions-item>
    </el-descriptions>
  </el-card>

  <el-card style="margin-top: 20px" shadow="never">
    <template #header>
      <div class="title">{{ t('info.dependencies') }}</div>
    </template>
    <el-descriptions border>
      <el-descriptions-item
        :label="key.toString()"
        v-for="(value, key) in packageJson.dependencies"
        :key="key"
      >
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>

  <el-card style="margin-top: 20px" shadow="never">
    <template #header>
      <div class="title">{{ t('info.devDependencies') }}</div>
    </template>
    <el-descriptions border>
      <el-descriptions-item
        :label="key.toString()"
        v-for="(value, key) in packageJson.devDependencies"
        :key="key"
      >
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<style lang="scss" scoped>
.title {
  font-size: $font-size-xl;
}
</style>
