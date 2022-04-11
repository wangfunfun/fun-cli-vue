<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { userTypeDicts } from '@/common/dict'
import { useCrudHook } from '@/hooks/crud'
import { useI18n } from 'vue-i18n'
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>

export default defineComponent({
  name: 'UserInfo',
  setup(props, { emit }) {
    const { t } = useI18n()

    const visible = ref(false)

    const state = reactive({
      searchUrl: '/user/info',
      isPageSearch: false,
      dataForm: {
        avatarUrl:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        userName: '',
        phone: '',
        sex: 0,
        deptId: '',
        roleId: '',
      },
    })

    const rules = reactive({
      userName: [
        {
          required: true,
          message: t('crud.rule.enter', { label: t('label.userName') }),
          trigger: 'blur',
        },
      ],
      phone: [
        {
          required: true,
          message: t('crud.rule.enter', { label: t('label.phone') }),
          trigger: 'blur',
        },
      ],
      sex: [
        {
          required: true,
          message: t('crud.rule.select', { label: t('label.sex') }),
          trigger: 'blur',
        },
      ],
      deptId: [
        {
          required: true,
          message: t('crud.rule.select', { label: t('label.dept') }),
          trigger: 'blur',
        },
      ],
      roleId: [
        {
          required: true,
          message: t('crud.rule.select', { label: t('label.role') }),
          trigger: 'blur',
        },
      ],
    })

    const init = () => {
      visible.value = true
    }

    const close = () => {
      visible.value = false
      emit('close', false)
    }

    const confirm = () => {
      close()
    }

    return {
      ...useCrudHook(state),
      ...toRefs(state),
      t,
      userTypeDicts,
      visible,
      init,
      close,
      confirm,
      rules,
    }
  },
})
</script>

<template>
  <el-dialog
    v-model="visible"
    :title="t('info.userInfo')"
    width="35%"
    :before-close="close"
  >
    <el-form
      class="crud-form"
      ref="formDom"
      :model="dataForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item :label="t('label.avatar')" prop="avatarUrl">
        <el-avatar size="large" :src="dataForm.avatarUrl"></el-avatar>
      </el-form-item>
      <el-form-item :label="t('label.userName')" prop="userName">
        <el-input
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.userName') })
          "
          v-model="dataForm.userName"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('label.phone')" prop="phone">
        <el-input
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.phone') })
          "
          v-model="dataForm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('label.sex')" prop="sex">
        <el-radio-group v-model="dataForm.sex">
          <el-radio :label="0">{{ t('info.male') }}</el-radio>
          <el-radio :label="1">{{ t('info.female') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="t('label.dept')" prop="deptId">
        <el-select
          class="crud-el-select"
          :placeholder="t('crud.placeholder.enter', { label: t('label.dept') })"
          v-model="dataForm.deptId"
        ></el-select>
      </el-form-item>
      <el-form-item :label="t('label.role')" prop="roleId">
        <el-select
          class="crud-el-select"
          :placeholder="t('crud.placeholder.enter', { label: t('label.role') })"
          v-model="dataForm.roleId"
        ></el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="crud-dialog-footer">
        <el-button @click="close">{{ t('btn.cancel') }}</el-button>
        <el-button type="primary" @click="confirm">{{
          t('btn.update')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
