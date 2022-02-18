<script lang="ts" setup>
import { reactive, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElIcon } from 'element-plus'
import { UserOutlined, LockOutlined, LogoutOutlined } from '@vicons/antd'
import BtnHover from '@/components/btn-hover'

const { t } = useI18n()

const userInfo = reactive({
  username: '游客',
})

const renderIcon = (icon: any) => {
  return () => {
    return h(ElIcon, null, {
      default: () => h(icon),
    })
  }
}
</script>

<template>
  <BtnHover>
    <template #content>
      <el-dropdown>
        <div class="flex-start">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span style="padding-left: 12px">{{ userInfo.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="renderIcon(UserOutlined)">
              <span>{{ t('user.userInfo') }}</span>
            </el-dropdown-item>
            <el-dropdown-item :icon="renderIcon(LockOutlined)">
              <span>{{ t('user.lock') }}</span>
            </el-dropdown-item>
            <el-dropdown-item :icon="renderIcon(LogoutOutlined)">
              <span>{{ t('user.logout') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </BtnHover>
</template>

<style lang="scss" scoped>
.username {
  max-width: 80px;
  font-size: $font-size-base;
}
</style>
