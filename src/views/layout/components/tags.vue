<template>
  <div v-if="ADMINSYS_LAYOUT_TAGSOPS.showTags" class="slot">
    <!-- tags列表 -->
    <el-tabs
      v-model="ADMINSYS_LAYOUT_TAGSOPS.currentTag"
      type="card"
      @tab-click="clickTags"
      @tab-remove="removeTags"
    >
      <el-tab-pane
        :key="index"
        v-for="(item, index) in ADMINSYS_LAYOUT_TAGSOPS.tagsList"
        :label="item.meta.menuName"
        :name="item.path"
        closable
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
    <!-- tag操作菜单 -->
    <div
      v-if="operateMenu"
      class="operateMenu"
      :style="{ left: contentmenuX + 'px', top: contentmenuY + 'px' }"
    >
      <div class="item" @click="closeOthersTags">关闭其他</div>
      <div class="item" @click="closeAllTags">关闭全部</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref, onMounted } from 'vue'
import { useStore } from '../../../store'
import { onBeforeRouteUpdate } from 'vue-router'
import Storage from '../../../utils/storage'
export default defineComponent({
  name: 'Tags',
  setup() {
    // vuex配置
    const store = useStore()
    const layoutOps = reactive({
      ADMINSYS_LAYOUT_TAGSOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_TAGSOPS)
    })

    // 监听路由
    onBeforeRouteUpdate((to) => {
      store.commit('layout/addTag', to)
    })

    // 右键菜单
    const operateMenu = ref(false)
    const updateMenuVisible = (value: boolean) => {
      operateMenu.value = value
    }

    // 点击标签
    const clickTags = (e: any) => {
      console.log(e)
    }

    // 移除标签
    const removeTags = (e: any) => {
      console.log(e)
    }

    // 初始化tag
    onMounted(() => {
      let obj: any = new Storage('FIRST_TAG', 'local').get()
      store.commit('layout/setFirstTag', obj.save_data)
    })

    return {
      ...toRefs(layoutOps),
      operateMenu,
      updateMenuVisible,
      clickTags,
      removeTags
    }
  }
})
</script>
<style lang="scss" scoped>
.slot {
  position: relative;
  padding-left: 20px;
}
.operateMenu {
  position: absolute;
  z-index: 99;
}
</style>
