<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue'
import {
  Language,
  Refresh,
  Screen,
  Setting,
  Unfold,
  User,
  Message,
  UserInfo,
} from '@/layouts/components'

interface optionsState {
  iconSize?: number | string
}

const options = reactive<optionsState>({
  iconSize: 20,
})

const userInfoVisible = ref(false)
const userInfoDom: any = ref(null)

const openUserInfo = () => {
  userInfoVisible.value = true
  nextTick(() => {
    userInfoDom.value.init()
  })
}
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
      <User :showTooltip="false" @openUserInfo="openUserInfo"></User>
    </div>
  </div>
  <UserInfo
    ref="userInfoDom"
    v-if="userInfoVisible"
    @close="userInfoVisible = false"
  ></UserInfo>
</template>

<style lang="scss" scoped>
.slot {
  padding: 0 20px;
}
</style>
