<template>
  <el-dialog title="Vuex 示例" v-model="showVuexDialog">
    <div class="flex-center flex-wrap">
      <div class="item">store Name is: {{ name }}</div>
      <div class="item">store doubleCount is: {{ count }}</div>
      <el-button type="primary" @click="double">double</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, toRefs } from 'vue'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'Vuex',
  setup() {
    // vuex example
    const store = useStore()
    const vuexExampleData = reactive({
      name: computed(() => store.state.vuexExample.name),
      count: computed(() => store.state.vuexExample.count),
      double() {
        store.commit('vuexExample/DOUBLE_COUNT')
      }
    })

    // 测试窗口 dialog
    const showVuexDialog = ref(false)
    const openDialog = () => {
      showVuexDialog.value = true
    }

    return {
      ...toRefs(vuexExampleData),
      openDialog
    }
  }
})
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
}
</style>
