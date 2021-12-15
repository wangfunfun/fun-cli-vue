<script lang="ts" setup>
/**
 * @name inject-provider
 * Some components of Naiveui need to be injected in advance for use in TS files
 */

import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'

window.$loadingBar = useLoadingBar()
window.$dialog = useDialog()
window.$message = useMessage()
window.$notification = useNotification()
</script>

<template>
  <div></div>
</template>
