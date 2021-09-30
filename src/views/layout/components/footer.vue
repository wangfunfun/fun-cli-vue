<template>
  <div class="components flex-between">
    <div>
      <span class="txt" v-if="ADMINSYS_LAYOUT_FOOTEROPS.showNowView"
        >{{ t('layout.nowView')
        }}{{ currentTag.meta ? currentTag.meta.menuName : '未知页面' }}</span
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
import { defineComponent, reactive, computed, toRefs, watch } from 'vue'
import { useStore } from '../../../store'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'Footer',
  setup() {
    // 18n 国际化
    const { t } = useI18n()

    // 配置
    const store = useStore()
    const footerOps = reactive({
      ADMINSYS_LAYOUT_FOOTEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_FOOTEROPS),
      currentTag: computed(() => store.state.tags.CURRENT_TAG)
    })

    // 监听路由
    const route = useRoute()
    watch(route.meta, (newVal) => {
      console.log(newVal)
    })

    return {
      ...toRefs(footerOps),
      t
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
