<template>
  <div v-loading="loading">
    <iframe class="iframe" :src="url" @load="load"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const url = ref('about:_blank')
    const loading = ref(false)

    watch(
      () => route,
      (vl) => {
        if (vl.path === '/iframe') {
          setUrl(vl)
        }
      },
      { deep: true }
    )

    onMounted(() => {
      setUrl(route)
    })
    const setUrl = (route: RouteLocationNormalizedLoaded): void => {
      const { meta, query } = route
      loading.value = true
      if (query.url) {
        url.value = query.url as string
      } else {
        if (meta && meta.isIframe) {
          url.value = meta.url as string
        }
      }
    }
    const load = () => {
      loading.value = false
    }
    return { url, loading, load }
  },
})
</script>
<style lang="scss" scoped>
.iframe {
  min-height: calc(100vh - 130px);
  width: 100%;
  border: 0;
}
</style>
