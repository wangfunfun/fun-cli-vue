<template>
  <!-- 默认布局 -->
  <el-container v-if="ADMINSYS_LAYOUT_METHOD == 'layoutA'">
    <el-aside>
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
  <!-- 布局 2 -->
  <el-container v-if="ADMINSYS_LAYOUT_METHOD == 'layoutB'">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useStore } from '../../store'

import Header from './components/header.vue'
import Aside from './components/aside.vue'
import Footer from './components/footer.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Aside,
    Footer
  },
  setup() {
    const store = useStore()
    const layoutOps = reactive({
      ADMINSYS_LAYOUT_METHOD: computed(() => store.state.layout.ADMINSYS_LAYOUT_METHOD),
      ADMINSYS_LAYOUT_TAB: computed(() => store.state.layout.ADMINSYS_LAYOUT_TAB),
      ADMINSYS_LAYOUT_HEADEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_HEADEROPS),
      ADMINSYS_LAYOUT_FOOTEROPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_FOOTEROPS),
      ADMINSYS_LAYOUT_ASIDEOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_ASIDEOPS)
    })

    return {
      ...toRefs(layoutOps)
    }
  }
})
</script>
