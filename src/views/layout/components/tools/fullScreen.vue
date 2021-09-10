<template>
  <el-tooltip
    :content="
      ADMINSYS_LAYOUT_HEADEROPS.fullScreen
        ? t('layout.closeFullScreenTip')
        : t('layout.openFullScreenTip')
    "
    placement="bottom"
    effect="light"
    :show-after="1000"
    v-if="ADMINSYS_LAYOUT_HEADEROPS.showFullScreen"
  >
    <div class="btn" @click="openFullScreen">
      <i class="el-icon-full-screen"></i>
    </div>
  </el-tooltip>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../../../store/index'

export default defineComponent({
  name: 'fullScreen',
  setup() {
    const { t } = useI18n()
    const store = useStore()

    const layoutOps = reactive({
      ADMINSYS_LAYOUT_HEADEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_HEADEROPS)
    })

    // 挂载DOM时监听全屏状态，进行处理
    onMounted(() => {
      // 监听键盘事件
      document.addEventListener('keydown', (e) => {
        if (e.key === 'F11') {
          layoutOps.ADMINSYS_LAYOUT_HEADEROPS.fullScreen =
            !layoutOps.ADMINSYS_LAYOUT_HEADEROPS.fullScreen
        }
      })
    })

    // 全屏/取消全屏
    // 由于浏览器的机制，用户手动触发全屏，会使代码退出全屏失效，目前暂无解决方案
    const openFullScreen = (updateState: boolean) => {
      // 是否是点击触发，如果不是点击触发，无需修改全屏状态
      if (updateState) {
        layoutOps.ADMINSYS_LAYOUT_HEADEROPS.fullScreen =
          !layoutOps.ADMINSYS_LAYOUT_HEADEROPS.fullScreen
      }
      if (layoutOps.ADMINSYS_LAYOUT_HEADEROPS.fullScreen) {
        // 全屏
        const ele = document.documentElement as any
        if (ele.requestFullscreen) {
          ele.requestFullscreen()
        } else if (ele.webkitRequestFullScreen) {
          ele.webkitRequestFullScreen()
        } else if (ele.mozRequestFullScreen) {
          ele.mozRequestFullScreen()
        } else if (ele.msRequestFullscreen) {
          // IE11
          ele.msRequestFullscreen()
        }
      } else {
        // 退出全屏
        const dom = document as any
        if (dom.exitFullscreen) {
          dom.exitFullscreen()
        } else if (dom.webkitCancelFullScreen) {
          dom.webkitCancelFullScreen()
        } else if (dom.mozCancelFullScreen) {
          dom.mozCancelFullScreen()
        } else if (dom.msExitFullscreen) {
          dom.msExitFullscreen()
        }
      }
    }

    return {
      ...toRefs(layoutOps),
      openFullScreen,
      t
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/layout.scss';
</style>
