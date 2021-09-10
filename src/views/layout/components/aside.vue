<template>
  <div
    class="components"
    :style="
      ADMINSYS_LAYOUT_ASIDEOPS.unfold ? 'width:65px' : `width: ${ADMINSYS_LAYOUT_ASIDEOPS.width}`
    "
  >
    <!-- aside logo 区域 -->
    <Logo></Logo>
    <!-- 侧栏菜单 -->
    <div
      class="aside"
      :style="
        ADMINSYS_LAYOUT_ASIDEOPS.showLogo
          ? `height:calc(100vh - ${ADMINSYS_LAYOUT_ASIDEOPS.logoHeight})`
          : `height:calc(100vh - ${ADMINSYS_LAYOUT_HEADEROPS.height})`
      "
    >
      <el-scrollbar
        :height="
          ADMINSYS_LAYOUT_ASIDEOPS.showLogo
            ? `calc(100vh - ${ADMINSYS_LAYOUT_ASIDEOPS.logoHeight})`
            : `calc(100vh - ${ADMINSYS_LAYOUT_HEADEROPS.height})`
        "
      >
        <!-- 菜单列表 -->
        <el-menu
          :collapse="ADMINSYS_LAYOUT_ASIDEOPS.unfold"
          :uniqueOpened="ADMINSYS_LAYOUT_ASIDEOPS.onlyOpen"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @select="selectMenu"
          background-color="#675ef9"
          text-color="#cccccc"
          active-text-color="#ffffff"
          v-if="ADMINSYS_LAYOUT_ROUTES.length > 0"
        >
          <Menu :menu="ADMINSYS_LAYOUT_ROUTES"></Menu>
        </el-menu>
        <!-- 没有发现菜单 -->
        <div class="noMenu" v-if="ADMINSYS_LAYOUT_ROUTES.length === 0">
          <el-empty description="暂时没有发现菜单" :image-size="80"></el-empty>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../../../store/index'
import Logo from './logo.vue'
import Menu from './menu.vue'

export default defineComponent({
  name: 'Aside',
  components: {
    Logo,
    Menu
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const asideOps = reactive({
      ADMINSYS_LAYOUT_ASIDEOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_ASIDEOPS),
      ADMINSYS_LAYOUT_HEADEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_HEADEROPS),
      ADMINSYS_LAYOUT_ROUTES: computed(() => store.state.route.ADMINSYS_LAYOUT_ROUTES)
    })

    const selectMenu = (e: any) => {
      router.push(e)
    }

    return {
      ...toRefs(asideOps),
      selectMenu
    }
  }
})
</script>
<style lang="scss" scoped>
.aside {
  background-color: #675ef9;
}

.components {
  transition: all 0.6s ease-in-out;
}
</style>
