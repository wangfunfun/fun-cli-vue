<script lang="ts" setup>
/**
 * @name loading
 * a component to display loading page
 */
</script>

<template>
  <div class="loading flex-between">
    <span v-for="i in 5" :key="i"></span>
  </div>
</template>

<style lang="scss" scoped>
@keyframes loading {
  0% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.3);
  }
}

.loading {
  width: 150px;
  height: 15px;
  margin: 0 auto;
  margin-top: 100px;
  span {
    display: inline-block;
    width: 15px;
    height: 100%;
    margin-right: 5px;
    border-radius: 50%;
    background: lightgreen;
    animation: loading 1.04s ease infinite;

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: calc(0.13s * #{$i});
      }
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
