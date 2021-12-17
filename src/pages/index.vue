<script lang="ts" setup>
/**
 * @name landing-page
 * The landing page cannot write any code in principle and is only used for page redirection
 */

import { onBeforeMount, onMounted, ref } from 'vue'
import { Logo } from '@/components/common'
import { LoadingCircle } from '@/components/animation'
import { useRouter } from 'vue-router'
import { WEBSITE_CONFIG } from '@/common/config'

const router = useRouter()

const loading = ref<boolean>(false)

onBeforeMount(() => {
  loading.value = true
})

onMounted(() => {
  loading.value = false
  router.replace({ path: WEBSITE_CONFIG.firstPage })
})
</script>

<template>
  <div class="slot">
    <div class="inner">
      <Logo></Logo>
      <LoadingCircle></LoadingCircle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  height: 100vh;
  overflow: hidden;
}
.inner {
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
