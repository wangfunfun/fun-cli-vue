<template>
  <div>
    <el-dropdown trigger="click" placement="bottom-start" @command="setLanguage">
      <span class="language not-select" v-if="mode == 'txt'">
        <span>{{ nowLanguage }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <div class="btn" @click="openFullScreen" v-if="mode == 'btn'" style="padding: 0 10px">
        <span style="font-size: 16px">{{ nowLanguage }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="key" v-for="(item, key) in languageData" :key="key">
            {{ item.languageName }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Storage from '../../utils/storage'

export default defineComponent({
  props: {
    // 模式
    mode: {
      type: String,
      default: 'txt'
    }
  },
  setup(props) {
    const { locale, messages } = useI18n()

    // 语言数据
    const languageData = messages.value
    // 当前选择的语言
    const nowLanguage = ref<string>('')
    // 组件模式
    const mode = props.mode

    // 切换语言
    const setLanguage = (val: any) => {
      locale.value = val
      new Storage('LANGUAGE', 'local', val).set()
      nowLanguage.value = languageData[val].languageName
    }

    // 挂载组件时初始化语言
    onMounted(() => {
      const data: any = new Storage('LANGUAGE', 'local').get()
      if (data) {
        setLanguage(data.save_data)
      } else {
        setLanguage(locale.value)
      }
    })

    return {
      mode,
      languageData,
      setLanguage,
      onMounted,
      nowLanguage
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/layout.scss';
.language {
  color: #ddd;
  cursor: pointer;
  font-size: 18px;
  margin-right: 80px;
}
:deep(.el-dropdown-menu__item) {
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #675ef9;
    color: #fff;
    transition: all 0.2s ease-in;
  }
}
</style>
