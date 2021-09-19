<template>
  <div class="components flex-between" :style="{ height: ADMINSYS_LAYOUT_HEADEROPS.height }">
    <div class="flex-start">
      <!-- 展开/缩放 -->
      <Unfold></Unfold>
      <!-- 切换语言 -->
      <ChangeLanguage mode="btn" v-if="ADMINSYS_LAYOUT_HEADEROPS.showLanguage"></ChangeLanguage>
    </div>
    <div class="flex-start">
      <!-- 刷新视图 -->
      <Refresh v-if="ADMINSYS_LAYOUT_HEADEROPS.showRefresh"></Refresh>
      <!-- 全屏/取消全屏 -->
      <FullScreen v-if="ADMINSYS_LAYOUT_HEADEROPS.showFullScreen"></FullScreen>
      <!-- 切换主题 -->
      <Theme v-if="ADMINSYS_LAYOUT_HEADEROPS.showTheme"></Theme>
      <!-- 消息 -->
      <Message v-if="ADMINSYS_LAYOUT_HEADEROPS.showMessage"></Message>
      <!-- 用户 -->
      <User></User>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from '../../../store'
// 功能组件
import Unfold from './tools/unfold.vue'
import Refresh from './tools/refresh.vue'
import FullScreen from './tools/fullScreen.vue'
import Theme from './tools/theme.vue'
import Message from './tools/message.vue'
import User from './tools/user.vue'
import ChangeLanguage from '../../../components/language/changeLanguage.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Unfold,
    Refresh,
    FullScreen,
    Theme,
    Message,
    User,
    ChangeLanguage
  },
  setup() {
    const store = useStore()
    const layoutOps = reactive({
      ADMINSYS_LAYOUT_HEADEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_HEADEROPS)
    })

    return {
      ...toRefs(layoutOps)
    }
  }
})
</script>
<style lang="scss" scoped>
.components {
  background-color: #fff;
}
</style>
