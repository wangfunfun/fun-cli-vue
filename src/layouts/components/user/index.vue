<script lang="ts" setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import BtnHover from '@/components/btn-hover'
import { useUserHook } from '@/hooks/user'

const { t } = useI18n()

const userHook = useUserHook()

const userInfo = reactive({
  username: '游客',
})

const emit = defineEmits(['openUserInfo'])

const clickMenu = (command: string) => {
  if (command === 'userInfo') {
    emit('openUserInfo')
  } else if (command === 'lock') {
    userHook.lock()
  } else if (command === 'logout') {
    userHook.logout()
  }
}
</script>

<template>
  <BtnHover>
    <template #content>
      <el-dropdown @command="clickMenu">
        <div class="flex-start">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span style="padding-left: 12px">{{ userInfo.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userInfo">
              <SvgIcon width="14px" name="PersonOutline"></SvgIcon>
              <span class="label">{{ t('user.userInfo') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="lock">
              <SvgIcon width="14px" name="LockClosedOutline"></SvgIcon>
              <span class="label">{{ t('user.lock') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              <SvgIcon width="14px" name="LogOutOutline"></SvgIcon>
              <span class="label">{{ t('user.logout') }}</span>
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

.label {
  padding-left: 6px;
}
</style>
