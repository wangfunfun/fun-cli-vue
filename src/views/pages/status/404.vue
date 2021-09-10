<template>
  <div class="page flex-center flex-wrap not-select">
    <img class="pic not-select-pic" src="../../../assets/status/404.png" alt="" />
    <div class="tip">好像迷路了，没找到地址...</div>
    <div class="back" @click="go">返回</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const go = () => {
      router.go(-2)
    }

    return {
      go
    }
  }
})
</script>
<style lang="scss" scoped>
.page {
  background-image: url('../../../assets/default/login-bg.jpg');
  background-size: cover;
}
.pic {
  width: 600px;
}
.tip {
  width: 100%;
  text-align: center;
  color: #eee;
  margin-top: -400px;
  font-size: 20px;
}
.back {
  text-align: center;
  color: #5a5bf5;
  margin-top: -400px;
  font-size: 18px;
  background-color: #ddd;
  font-weight: bold;
  padding: 10px 50px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: scale(1);
  &:hover {
    box-shadow: 0 0 20px 10px rgba($color: #000000, $alpha: 0.06);
    transition: all 0.3s ease-in;
    transform: scale(1.1);
    background-color: #fff;
  }
}
</style>
