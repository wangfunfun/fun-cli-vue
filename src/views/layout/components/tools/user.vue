<template>
  <el-dropdown>
    <div class="user flex-start">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span class="username">游客</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>{{ t('layout.updatePassword') }}</el-dropdown-item>
        <el-dropdown-item> {{ t('layout.userInfo') }} </el-dropdown-item>
        <el-dropdown-item> {{ t('layout.logout') }} </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../../../store/index'

export default defineComponent({
  name: 'Unfold',
  setup() {
    const { t } = useI18n()
    const store = useStore()

    const layoutOps = reactive({
      ADMINSYS_LAYOUT_ASIDEOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_ASIDEOPS)
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
