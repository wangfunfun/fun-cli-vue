<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cli-global-loading',
  setup() {
    const { t } = useI18n()

    // 您可以在此自定义 loading 图标
    const loadingIcon = ``

    return {
      t,
      loadingIcon,
    }
  },
})
</script>

<template>
  <div
    class="globalLoading"
    v-loading="true"
    :element-loading-svg="loadingIcon"
    :element-loading-fullscreen="true"
    :element-loading-lock="true"
    :element-loading-text="t('loading')"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  ></div>
</template>

<style lang="scss" scoped>
.globalLoading {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  box-sizing: content-box;
}
</style>
