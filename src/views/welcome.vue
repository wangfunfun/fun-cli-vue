<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { APP_NAME } from '@/common/constant'
import { useRouter } from 'vue-router'
import { useLanguageHook, i18nConfig } from '@/hooks/language'
import packageJson from '../../package.json'
import { ElMessage } from 'element-plus'

const { t } = useI18n()

const router = useRouter()

const language = useLanguageHook()

const goRoutes = (route: string, isBuilding: boolean = false) => {
  if (isBuilding) {
    ElMessage({
      message: t('building'),
      type: 'warning',
      duration: 3000,
    })
    return
  }
  router.push({ path: route })
}

const goWebsite = (url: string) => {
  window.open(url)
}

const packagesInfoVisible = ref(false)

const openPackagesInfo = () => {
  packagesInfoVisible.value = true
}
</script>

<template>
  <div class="page">
    <div class="welcome">
      <div class="logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="title">{{ APP_NAME }}</div>
      <div class="desc">{{ t('welcome.description') }}</div>
      <div class="link">
        <el-button type="text" @click="goWebsite('https://element-plus.org/')">
          {{ t('welcome.elementPlus') }}
        </el-button>
        <el-button type="text" @click="goRoutes('/documents', true)">
          {{ t('welcome.documents') }}
        </el-button>
        <el-button type="text" @click="openPackagesInfo">
          {{ t('welcome.packages') }}
        </el-button>
        <el-dropdown @command="language.changeLanguage">
          <cli-svg-icon name="LanguageOutline"></cli-svg-icon>
          <template #dropdown>
            <el-dropdown-menu v-for="(value, key) in i18nConfig" :key="key">
              <el-dropdown-item :command="key">{{ value }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="packagesInfoVisible"
    :title="t('welcome.packages')"
    width="80%"
  >
    <el-card style="margin-top: 20px" shadow="never">
      <template #header>
        <div>dependencies</div>
      </template>
      <el-descriptions border>
        <el-descriptions-item
          :label="key.toString()"
          v-for="(value, key) in packageJson.dependencies"
          :key="key"
        >
          {{ value }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card style="margin-top: 20px" shadow="never">
      <template #header>
        <div>devDependencies</div>
      </template>
      <el-descriptions border>
        <el-descriptions-item
          :label="key.toString()"
          v-for="(value, key) in packageJson.devDependencies"
          :key="key"
        >
          {{ value }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </el-dialog>
</template>

<style scoped lang="scss">
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 506px;
}

.logo {
  width: 120px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.title {
  font-size: $font-size-xxl;
  font-weight: bolder;
  margin: 20px 0 20px 0;
  text-align: center;
}
.link {
  padding: 40px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-button + .el-button {
  margin: 0 !important;
}
</style>
