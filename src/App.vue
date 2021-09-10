<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup() {
    const { locale } = useI18n()
    return {
      locale
    }
  }
})
</script>

<style lang="scss">
// 公共样式
@import '@/style/common.scss';
@import '@/style/flex.scss';
@import '@/style/reset.scss';
@import '@/style/element.scss';
</style>
