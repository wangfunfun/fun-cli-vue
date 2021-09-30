<template>
  <div v-if="showTags" class="slot">
    <!-- tags列表 -->
    <el-tabs v-model="currentTagPath" type="card" @tab-click="clickTags" @tab-remove="removeTags">
      <el-tab-pane
        :key="index"
        v-for="(item, index) in tagsList"
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
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
import Storage from '../../../utils/storage'
export default defineComponent({
  name: 'Tags',
  setup() {
    // router

    const router = useRouter()

    // vuex配置

    const store = useStore()
    const tagsOps = reactive({
      showTags: computed(() => store.state.tags.SHOW_TAGS),
      tagsList: computed(() => store.state.tags.TAGS_LIST),
      currentTagPath: computed(() => store.state.tags.CURRENT_TAG.path)
    })

    // 初始化tag

    onMounted(() => {
      // 初始化刷新前的tag列表
      let tagsList: any = new Storage('TAG_LIST', 'session').get()
      if (tagsList) {
        store.commit('tags/updateTagsList', tagsList.save_data)
      }
      // 校验是否有临时当前选中的tag
      let currentTag: any = new Storage('CURRENT_TAG', 'session').get()
      if (currentTag) {
        router.replace(currentTag.save_data.path)
        store.dispatch('tags/addTag', currentTag.save_data)
        return
      }
      // 缓存首个tag
      store.commit('tags/setFirstTag', store.state.route.ADMINSYS_LAYOUT_ROUTES[0])
      // 获取配置好的首个tag
      let firstTag: any = new Storage('FIRST_TAG', 'local').get()
      if (firstTag) {
        router.replace(firstTag.save_data.path)
        store.dispatch('tags/addTag', firstTag.save_data)
        return
      }
    })

    // 监听路由

    onBeforeRouteUpdate((to) => {
      store.dispatch('tags/addTag', to)
    })

    // 遍历tag

    const queryTag = (name: string) => {
      let queryRes = null
      let queryIndex = null
      tagsOps.tagsList.map((item: any, index: number) => {
        if (item.path == name) {
          queryRes = item
          queryIndex = index
        }
      })
      return { queryRes, queryIndex }
    }

    // 右键菜单
    const operateMenu = ref(false)
    const updateMenuVisible = (value: boolean) => {
      operateMenu.value = value
    }

    // 点击标签
    const clickTags = (e: any) => {
      let tag = e.props.name
      if (tag) {
        let res: any = queryTag(tag)
        store.commit('tags/setCurrentTag', res.queryRes)
        router.replace(res.queryRes.path)
      }
    }

    // 移除标签
    const removeTags = (e: any) => {
      let tag = e
      if (tag) {
        let res: any = queryTag(tag)
        store.dispatch('tags/removeTag', res)
      }
    }

    return {
      ...toRefs(tagsOps),
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
