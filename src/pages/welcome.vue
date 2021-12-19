<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { NButton, NSpace, NGradientText, NCarousel, NCard, NIcon } from 'naive-ui'
import { DoubleRightOutlined } from '@vicons/antd'
import { APP_NAME } from '@/common/constant'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useConfigStore } from '@/store/config'
import { Wave } from '@/components/animation'

const { t } = useI18n()

const configStore = useConfigStore()

const router = useRouter()

const goWebsite = (url: string): void => {
  window.open(url)
}

const goLogin = () => {
  router.push({ name: 'Login', params: { currentComponent: 'login' } })
}

const theme = reactive({
  theme: computed(() => configStore.theme),
  gradientColor: computed(() => {
    if (theme.theme) {
      return {
        from: '#fff',
        to: '#eee',
      }
    }
    return {
      from: '#444',
      to: '#999',
    }
  }),
})
</script>

<template>
  <div class="introduce flex-center flex-wrap">
    <div class="title">
      <n-gradient-text :gradient="theme.gradientColor">
        <span> {{ APP_NAME }}</span>
      </n-gradient-text>
    </div>
    <div class="description">
      {{ t('welcome.description') }}
    </div>
    <div class="operate">
      <n-space>
        <n-button
          size="large"
          style="padding: 10px 20px"
          @click="goWebsite('https://www.naiveui.com')"
          >{{ t('btn.goNaive') }}</n-button
        >
        <n-button type="primary" size="large" style="padding: 10px 20px" @click="goLogin">{{
          t('btn.startUse')
        }}</n-button>
      </n-space>
    </div>
  </div>
  <Wave></Wave>

  <div class="slogan">
    <n-gradient-text :gradient="theme.gradientColor">
      <span> {{ t('info.providedPage') }}</span>
    </n-gradient-text>
  </div>
  <n-card content-style="padding: 0;" class="card">
    <n-carousel autoplay>
      <img class="swiper" src="@/assets/image/welcome/login.jpg" />
      <img class="swiper" src="@/assets/image/welcome/code.jpg" />
    </n-carousel>
  </n-card>

  <div class="slogan">
    <n-gradient-text :gradient="theme.gradientColor">
      <span> {{ t('info.xicons') }}</span>
      <span>{{ t('symbol.comma') }}</span>
      <span class="btn-more" @click="goWebsite('https://www.xicons.org/#/')">
        <span>{{ t('btn.more') }}</span>
        <n-icon size="20" style="margin-left: 5px">
          <DoubleRightOutlined></DoubleRightOutlined>
        </n-icon>
      </span>
    </n-gradient-text>
  </div>
  <n-card content-style="padding: 0;" class="card">
    <img class="picture" src="@/assets/image/welcome/xicons.jpg" />
  </n-card>

  <div class="slogan">
    <n-gradient-text :gradient="theme.gradientColor">
      <span> {{ t('info.admin') }}</span>
      <span>{{ t('symbol.comma') }}</span>
      <span class="btn-more" @click="goLogin">
        <span>{{ t('btn.clickToLoginAdmin') }}</span>
        <n-icon size="20" style="margin-left: 5px">
          <DoubleRightOutlined></DoubleRightOutlined>
        </n-icon>
      </span>
    </n-gradient-text>
  </div>
  <n-card content-style="padding: 0;" class="card">
    <div class="building-tip">{{ t('info.building') }}</div>
  </n-card>
</template>

<style lang="scss" scoped>
.introduce {
  padding-top: 300px;
  width: 800px;
  margin: 0 auto;
  .title {
    width: 100%;
    text-align: center;

    span {
      font-size: $font-size-xxxl;
      font-weight: 600;
    }
  }

  .description {
    line-height: 1.6;
    font-size: $font-size-md;
    padding: 40px 0;
  }
}

.slogan {
  width: $container-width;
  padding: 150px 0;
  margin: 0 auto;
  text-align: center;
  span {
    font-size: $font-size-xxl;
    font-weight: bold;
  }

  .btn-more {
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      color: #18a058;
      transition: all 0.2s ease-in;
    }
  }
}

.card {
  width: $container-width;
  margin: 0 auto;
  margin-bottom: 150px;
  .swiper {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .picture {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .building-tip {
    font-size: $font-size-xxl;
    height: 250px;
    line-height: 250px;
    text-align: center;
    color: #aaa;
  }
}
</style>
