<template>
  <div
    class="logo flex-center"
    v-if="ADMINSYS_LAYOUT_ASIDEOPS.showLogo"
    :style="{ height: ADMINSYS_LAYOUT_ASIDEOPS.logoHeight }"
  >
    <!-- 菜单缩放时的 logo -->
    <div class="close" v-show="ADMINSYS_LAYOUT_ASIDEOPS.unfold">A</div>
    <!-- 菜单展开时的 logo -->
    <div class="unfold" v-show="!ADMINSYS_LAYOUT_ASIDEOPS.unfold">Admin</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from '../../../store'

export default defineComponent({
  name: 'Unfold',
  setup() {
    const store = useStore()
    const layoutOps = reactive({
      ADMINSYS_LAYOUT_ASIDEOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_ASIDEOPS)
    })

    return {
      ...toRefs(layoutOps)
    }
  }
})
</script>
<style lang="scss" scoped>
.logo {
  background-color: #675ef9;
  text-align: center;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
}
</style>
