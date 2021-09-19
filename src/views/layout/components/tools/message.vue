<template>
  <el-tooltip
    :content="t('layout.myMessageTip')"
    placement="bottom-end"
    effect="light"
    :show-after="1000"
    v-if="ADMINSYS_LAYOUT_HEADEROPS.showMessage"
  >
    <div class="btn">
      <i class="el-icon-bell"></i>
    </div>
  </el-tooltip>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../../../store/index'

export default defineComponent({
  name: 'message',
  setup() {
    const { t } = useI18n()
    const store = useStore()

    const layoutOps = reactive({
      ADMINSYS_LAYOUT_HEADEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_HEADEROPS)
    })

    // 展开/关闭侧栏
    const unfoldAside = () => {
      store.commit('layout/unfoldAside')
    }

    return {
      ...toRefs(layoutOps),
      unfoldAside,
      t
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/layout.scss';
</style>
