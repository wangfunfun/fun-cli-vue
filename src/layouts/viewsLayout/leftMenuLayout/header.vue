<script lang="ts" setup>
import { reactive } from 'vue'
import {
  Language,
  Refresh,
  Screen,
  Setting,
  Unfold,
  User,
  Message,
} from '@/layouts/components'

interface optionsState {
  iconSize?: number | string
}

const options = reactive<optionsState>({
  iconSize: 20,
})
</script>

<template>
  <div class="slot flex-between">
    <div class="left flex-start">
      <Unfold :iconSize="options.iconSize"></Unfold>
      <Refresh :iconSize="options.iconSize"></Refresh>
    </div>
    <div class="right flex-start">
      <Language :showTooltip="false"></Language>
      <Screen :iconSize="options.iconSize"></Screen>
      <Message :iconSize="options.iconSize"></Message>
      <Setting :iconSize="options.iconSize"></Setting>
      <User :showTooltip="false"></User>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  padding: 0 20px;
}
</style>
