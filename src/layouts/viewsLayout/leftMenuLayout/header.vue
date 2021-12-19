<script lang="ts" setup>
import { NCard } from 'naive-ui'
import { reactive } from 'vue'
import {
  Language,
  Refresh,
  Screen,
  Search,
  Setting,
  Unfold,
  Theme,
  Breadcrumb,
  User,
  Message
} from '../../components'

interface optionsState {
  iconSize?: number | string
}

const options = reactive<optionsState>({
  iconSize: 20
})
</script>

<template>
  <n-card class="shadow" content-style="padding: 0px 30px;">
    <div class="slot flex-between">
      <div class="left flex-start">
        <Unfold :iconSize="options.iconSize"></Unfold>
        <Breadcrumb></Breadcrumb>
        <Refresh :iconSize="options.iconSize"></Refresh>
        <Search :iconSize="options.iconSize"></Search>
      </div>
      <div class="right flex-start">
        <Language :showTooltip="false"></Language>
        <Theme :showTooltip="false"></Theme>
        <Screen :iconSize="options.iconSize"></Screen>
        <Message :iconSize="options.iconSize"></Message>
        <Setting :iconSize="options.iconSize"></Setting>
        <User :showTooltip="false"></User>
      </div>
    </div>
  </n-card>
</template>

<style lang="scss" scoped></style>
