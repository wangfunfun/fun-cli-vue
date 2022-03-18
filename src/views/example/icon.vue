<script lang="ts" setup>
import { IObject } from '@/@types/interface'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const iconFiles: Object = import.meta.globEager('../../assets/svgs/*.svg')

const iconList: IObject[] = []

for (const key in iconFiles) {
  if (Object.prototype.hasOwnProperty.call(iconFiles, key)) {
    const fileName: string = iconFiles[key].default.slice(17, -4)
    iconList.push({ iconName: fileName })
  }
}
</script>

<template>
  <CrudForm :title="t('example.icon.title')">
    <div class="flex-around flex-wrap">
      <div
        class="icon flex-start"
        v-for="(icon, index) in iconList"
        :key="index"
      >
        <SvgIcon width="32px" height="32px" :name="icon.iconName"></SvgIcon>
        <div class="icon-name">{{ icon.iconName }}</div>
      </div>
    </div>
  </CrudForm>
</template>

<style lang="scss" scoped>
.icon {
  width: 25%;
  margin-bottom: 20px;
  .icon-name {
    color: #020202;
    padding-left: 10px;
  }
}
</style>
