<script lang="ts" setup>
import {
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NConfigProvider,
  NElement
} from 'naive-ui'
import { Provider } from '@/components/common'
import { reactive, computed } from 'vue'
import { useConfigStore } from '@/store/config'
import GeneralCache from '@/utils/general-cache'

const configStore: any = useConfigStore()

const config = reactive({
  theme: computed(() => configStore.theme),
  naiveuiLanguage: computed(() => new GeneralCache('naiveuiLanguage', 'local').get()),
  naiveuiDateLanguage: computed(() => new GeneralCache('naiveuiDateLanguage', 'local').get())
})
</script>

<template>
  <n-config-provider
    :theme="config.theme"
    :locale="config.naiveuiLanguage"
    :date-locale="config.naiveuiDateLanguage"
  >
    <n-element>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <n-message-provider>
              <slot name="app"></slot>
              <Provider></Provider>
            </n-message-provider>
          </n-notification-provider>
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-element>
  </n-config-provider>
</template>
