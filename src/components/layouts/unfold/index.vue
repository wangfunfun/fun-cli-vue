<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { Hover } from '@/components/animation'

// props

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20
})

// i18n

const { t } = useI18n()

// screen status

const isFold = ref<boolean>(false)
</script>

<template>
  <Hover showTooltip :tooltip="isFold ? t('tooltip.unfold') : t('tooltip.fold')">
    <template #content>
      <n-icon :size="props.iconSize">
        <MenuUnfoldOutlined v-if="isFold"></MenuUnfoldOutlined>
        <MenuFoldOutlined v-else></MenuFoldOutlined>
      </n-icon>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>
