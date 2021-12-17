<script lang="ts" setup>
/**
 * @name unfold
 * a component to user's operation
 */

import { reactive, h } from 'vue'
import { NDropdown, NIcon, NButton, NAvatar } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { UserOutlined, LockOutlined, LogoutOutlined } from '@vicons/antd'
import { Hover } from '@/components/animation'

// i18n

const { t } = useI18n()

// user info

const userInfo = reactive({
  username: '游客'
})

// user's options

const renderIcon = (icon: any) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = reactive([
  {
    label: t('dropdown.userInfo'),
    key: 'userInfo',
    icon: renderIcon(UserOutlined)
  },
  {
    label: t('dropdown.lock'),
    key: 'lock',
    icon: renderIcon(LockOutlined)
  },
  {
    label: t('dropdown.logout'),
    key: 'logout',
    icon: renderIcon(LogoutOutlined)
  }
])
</script>

<template>
  <Hover>
    <template #content>
      <n-dropdown :options="options">
        <div class="flex-start">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <div class="username line-omitted-1" style="margin-left: 14px">
            {{ userInfo.username }}
          </div>
        </div>
      </n-dropdown>
    </template>
  </Hover>
</template>

<style lang="scss" scoped>
.username {
  max-width: 80px;
  font-size: $font-size-base;
}
</style>
