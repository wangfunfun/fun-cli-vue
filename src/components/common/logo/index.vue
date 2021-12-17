<script lang="ts" setup>
/**
 * @name logo
 * a component to show logo by shadow circle's shape
 */
</script>

<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  padding: 30px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 10px rgba($color: #000000, $alpha: 0.1);
  img {
    width: 100px;
    height: auto;
  }
}
</style>
