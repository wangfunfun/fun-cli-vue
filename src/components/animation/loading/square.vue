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
  }
  100% {
    opacity: 0;
    transform: rotate(90deg);
  }
}

.loading {
  width: 200px;
  height: 20px;
  span {
    display: inline-block;
    width: 20px;
    height: 100%;
    margin-right: 5px;
    background: lightgreen;
    transform-origin: right bottom;
    animation: loading 1s ease infinite;

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
