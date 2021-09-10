<template>
  <div class="page">
    <Header></Header>
    <Login></Login>
    <Register></Register>
    <img class="insert" src="../../../assets/default/login-insert.png" alt="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Header from './components/header.vue'

export default defineComponent({
  components: {
    Login,
    Register,
    Header
  },
  setup() {}
})
</script>
<style lang="scss" scoped>
.page {
  background-image: url('../../../assets/default/login-bg.jpg');
  background-size: cover;
}
.insert {
  position: fixed;
  left: 50px;
  top: 60%;
  transform: translateY(-50%);
  width: 700px;
  z-index: 1;
  pointer-events: none;
}
</style>
