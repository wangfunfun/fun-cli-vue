<script lang="ts">
/**
 * 名称：高德地图组件封装
 * ==================
 * = 使用 shallowRef 进行非深度监听，因为在 Vue3 所使用的 Proxy 拦截操作会改变 JSAPI 原生对象
 * ==================
 */
import { defineComponent, onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef } from '@vue/reactivity'
import { MAP_KEY } from '@/common/keys'

export default defineComponent({
  name: 'cli-gaode-map',
  props: {
    id: {
      type: String,
      default: 'CliGaodeMap',
    },
  },
  setup(props, { emit }) {
    const map = shallowRef(null)

    const initMap = () => {
      AMapLoader.load({
        key: MAP_KEY,
        version: '2.0',
      })
        .then((AMap) => {
          map.value = new AMap.Map(props.id, {
            zoom: 5,
            center: [105.602725, 37.076636],
          })
        })
        .catch((e) => {
          console.log(e)
        })
    }

    onMounted(() => {
      initMap()
    })

    return {
      id: props.id,
      map,
      initMap,
    }
  },
})
</script>

<template>
  <div :id="id" style="height: 400px"></div>
</template>

<style lang="scss" scoped></style>
