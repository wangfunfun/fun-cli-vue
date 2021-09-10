<template>
  <el-dropdown @command="operate">
    <div class="user flex-start">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span class="username">游客</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="pwd">{{ t('layout.updatePassword') }}</el-dropdown-item>
        <el-dropdown-item command="info"> {{ t('layout.userInfo') }} </el-dropdown-item>
        <el-dropdown-item command="logout"> {{ t('layout.logout') }} </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../../../store/index'
import { useRouter } from 'vue-router'
import Storage from '../../../../utils/storage'
import { ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  name: 'Unfold',
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const router = useRouter()

    const layoutOps = reactive({
      ADMINSYS_LAYOUT_ASIDEOPS: computed(() => store.state.layout.ADMINSYS_LAYOUT_ASIDEOPS)
    })

    /**
     * @name 操作菜单
     */
    const operate = (val: any) => {
      if (val == 'pwd') {
      } else if (val == 'info') {
      } else if (val == 'logout') {
        logout()
      }
    }

    /**
     * @name 退出登录
     */
    const logout = () => {
      ElMessageBox.confirm('是否退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true
      })
        .then(() => {
          new Storage('TOKEN', 'session').remove()
          router.replace('/login')
          ElMessage({
            type: 'success',
            message: '已退出登录',
            center: true
          })
        })
        .catch(() => {})
    }

    return {
      ...toRefs(layoutOps),
      operate,
      t
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/layout.scss';
</style>
