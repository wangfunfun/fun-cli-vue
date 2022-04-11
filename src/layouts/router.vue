<script lang="ts" setup>
import { APP_KEEP_ALIVE } from '@/common/config'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if="APP_KEEP_ALIVE">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
    <component :is="Component" v-if="!APP_KEEP_ALIVE" />
  </router-view>
</template>
