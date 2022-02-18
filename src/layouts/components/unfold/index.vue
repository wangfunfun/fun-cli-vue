<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import BtnHover from '@/components/btn-hover'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()

const isFold = ref<boolean>(false)
</script>

<template>
  <BtnHover
    showTooltip
    :tooltip="isFold ? t('tooltip.unfold') : t('tooltip.fold')"
  >
    <template #content>
      <el-icon :size="props.iconSize">
        <MenuUnfoldOutlined v-if="isFold"></MenuUnfoldOutlined>
        <MenuFoldOutlined v-else></MenuFoldOutlined>
      </el-icon>
    </template>
  </BtnHover>
</template>

<style lang="scss" scoped></style>
