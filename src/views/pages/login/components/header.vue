<template>
  <div class="slot flex-between">
    <div class="logo">
      <img src="../../../../assets/default/logo.png" alt="" />
    </div>
    <div class="tags flex-start">
      <div class="tag" v-for="(item, index) in tags" :key="index" @click="goUrl(item.url)">
        {{ item.label }}
      </div>
      <ChangeLanguage></ChangeLanguage>
    </div>
  </div>
</template>
<script ang="ts">
import { defineComponent } from 'vue'
import ChangeLanguage from '@/components/language/changeLanguage.vue'

export default defineComponent({
  components: {
    ChangeLanguage
  },
  setup() {
    const tags = [
      {
        label: 'Vue 3.x',
        url: 'https://v3.cn.vuejs.org/'
      },
      {
        label: 'Vite 2',
        url: 'https://vitejs.dev/'
      },
      {
        label: 'ElementPlus',
        url: 'https://element-plus.gitee.io/#/zh-CN'
      },
      {
        label: 'TypeScript',
        url: 'https://www.tslang.cn/'
      },
      {
        label: 'Github地址',
        url: 'https://github.com/wangqf19/AdminSys-vue3-ts-vite'
      }
    ]

    /**
     * @name 跳转链接
     */
    const goUrl = (url) => {
      window.open(url)
    }

    return {
      tags,
      goUrl
    }
  }
})
</script>
<style lang="scss" scoped>
.slot {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  .logo {
    padding-left: 80px;
    img {
      width: 200px;
      transition: all 0.3s ease-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.15);
        transition: all 0.3s ease-in;
      }
    }
  }
  .tag {
    margin-right: 50px;
    color: #ddd;
    cursor: pointer;
    font-size: 18px;
    position: relative;
    &:hover {
      color: #fff;
      transition: all 0.4s ease-in-out;
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: -5px;
      right: 0;
      height: 2px;
      width: 0;
      background: #eee;
      transition: 300ms ease all;
    }
    &:after {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: -5px;
    }
    &:hover:before,
    &:hover:after {
      width: 100%;
      transition: 500ms ease all;
    }
  }
}
</style>
