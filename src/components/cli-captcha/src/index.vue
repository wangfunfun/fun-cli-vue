<script lang="ts">
/**
 * 随机生成验证码组件
 * @fontSizeMin 字体大小-最小值
 * @fontSizeMax 字体大小-最大值
 * @backgroundColorMin 背景颜色-最小值
 * @backgroundColorMax 背景颜色-最大值
 * @colorMin 颜色-最小值
 * @colorMax 颜色-最大值
 * @lineColorMin 线颜色-最小值
 * @lineColorMax 线颜色-最大值
 * @dotColorMin 点颜色-最小值
 * @dotColorMax 点颜色-最大值
 * @contentWidth 主体宽度
 * @contentHeight 主体高度
 */

import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'cli-captcha',
  props: {
    fontSizeMin: {
      type: Number,
      default: 25,
    },
    fontSizeMax: {
      type: Number,
      default: 30,
    },
    backgroundColorMin: {
      type: Number,
      default: 255,
    },
    backgroundColorMax: {
      type: Number,
      default: 255,
    },
    colorMin: {
      type: Number,
      default: 0,
    },
    colorMax: {
      type: Number,
      default: 160,
    },
    lineColorMin: {
      type: Number,
      default: 100,
    },
    lineColorMax: {
      type: Number,
      default: 255,
    },
    dotColorMin: {
      type: Number,
      default: 0,
    },
    dotColorMax: {
      type: Number,
      default: 255,
    },
    contentWidth: {
      type: Number,
      default: 120,
    },
    contentHeight: {
      type: Number,
      default: 28,
    },
  },
  setup(props, { emit }) {
    const identifyCode = ref<string>('')

    // 创建一个验证码
    const createdCode = () => {
      const len = 4
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      for (let i = 0; i < len; i++) {
        codeList.push(chars.charAt(Math.floor(Math.random() * charsLen)))
      }
      identifyCode.value = codeList.join('')
      emit('getIdentifyCode')
      drawPic()
    }

    // 随机数
    const randomNum = (min: any, max: any) => {
      return Math.floor(Math.random() * (max - min) + min)
    }

    // 随机颜色
    const randomColor = (min: any, max: any) => {
      const r = randomNum(min, max)
      const g = randomNum(min, max)
      const b = randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    }

    // 绘制图片
    const drawPic = () => {
      const canvas: any = document.getElementById('captcha-canvas')
      const ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      ctx.fillStyle = randomColor(
        props.backgroundColorMin,
        props.backgroundColorMax
      )
      ctx.fillRect(0, 0, props.contentWidth, props.contentHeight)
      for (let i = 0; i < identifyCode.value.length; i++) {
        drawText(ctx, identifyCode.value[i], i)
      }
      drawLine(ctx)
      drawDot(ctx)
    }

    // 绘制文本
    const drawText = (ctx: any, txt: any, i: any) => {
      ctx.fillStyle = randomColor(props.colorMin, props.colorMax)
      ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + 'px SimHei'
      const x = (i + 1) * (props.contentWidth / (identifyCode.value.length + 1))
      const y = randomNum(props.fontSizeMax, props.contentHeight - 5)
      var deg = randomNum(-45, 45)
      ctx.translate(x, y)
      ctx.rotate((deg * Math.PI) / 180)
      ctx.fillText(txt, 0, 0)
      ctx.rotate((-deg * Math.PI) / 180)
      ctx.translate(-x, -y)
    }

    // 绘制干扰线
    const drawLine = (ctx: any) => {
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax)
        ctx.beginPath()
        ctx.moveTo(
          randomNum(0, props.contentWidth),
          randomNum(0, props.contentHeight)
        )
        ctx.lineTo(
          randomNum(0, props.contentWidth),
          randomNum(0, props.contentHeight)
        )
        ctx.stroke()
      }
    }

    // 绘制干扰点
    const drawDot = (ctx: any) => {
      for (let i = 0; i < 80; i++) {
        ctx.fillStyle = randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(
          randomNum(0, props.contentWidth),
          randomNum(0, props.contentHeight),
          1,
          0,
          2 * Math.PI
        )
        ctx.fill()
      }
    }

    onMounted(() => {
      createdCode()
    })

    return {
      createdCode,
      randomNum,
      randomColor,
      drawPic,
      drawText,
      drawLine,
      drawDot,
      identifyCode,
    }
  },
})
</script>

<template>
  <div class="captcha-canvas" @click="createdCode">
    <canvas
      id="captcha-canvas"
      :width="contentWidth"
      :height="contentHeight"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
.captcha-canvas {
  height: 30px;
  cursor: pointer;
  canvas {
    margin-top: 1px;
    margin-left: 8px;
  }
}
</style>
