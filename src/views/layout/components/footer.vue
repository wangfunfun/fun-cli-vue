<template>
  <div class="components flex-between">
    <div>
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.nowRouter"
        >正在浏览：系统设置 / 界面管理</span
      >
    </div>
    <div class="info flex-start">
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.nowUserName">当前登录人：游客</span>
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.loginDatetime"
        >登录时间：2021-08-18 11:24</span
      >
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.systemName">系统：AdminSys</span>
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.sysVersion">版本：1.0.0</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from '../../../store'

export default defineComponent({
  name: 'Footer',
  setup() {
    const store = useStore()
    const footerOps = reactive({
      ADMINSYS_LAYOUT_FOOTEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_FOOTEROPS)
    })

    return {
      ...toRefs(footerOps)
    }
  }
})
</script>
<style lang="scss" scoped>
.components {
  color: #999;
  font-size: 12px;
  line-height: 30px;
}
.info {
  .txt {
    padding-left: 20px;
  }
}
</style>
