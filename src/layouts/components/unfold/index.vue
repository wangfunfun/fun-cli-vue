<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import BtnHover from '@/components/btn-hover'
import { useLayoutStore } from '@/store/layout'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()

const layoutStore = useLayoutStore()
</script>

<template>
  <BtnHover
    showTooltip
    :tooltip="
      layoutStore.menuUnfoldStatus ? t('tooltip.unfold') : t('tooltip.fold')
    "
  >
    <template #content>
      <el-icon :size="props.iconSize">
        <MenuUnfoldOutlined
          v-if="!layoutStore.menuUnfoldStatus"
          @click="layoutStore.changeMenuUnfoldStatus"
        ></MenuUnfoldOutlined>
        <MenuFoldOutlined
          v-else
          @click="layoutStore.changeMenuUnfoldStatus"
        ></MenuFoldOutlined>
      </el-icon>
    </template>
  </BtnHover>
</template>

<style lang="scss" scoped></style>
