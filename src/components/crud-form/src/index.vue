<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'CrudForm',
  props: {
    title: {
      type: String,
      default: '',
    },
    operate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { t } = useI18n()

    return { t }
  },
})
</script>

<template>
  <div class="crud-form">
    <div class="crud-title" v-if="title">{{ title }}</div>
    <slot></slot>
    <div class="crud-operate" v-if="operate">
      <el-button type="primary">{{ t('btn.confirm') }}</el-button>
      <el-button>{{ t('btn.cancel') }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.crud-form {
  width: calc(100% - 40px);
  background-color: #fff;
  padding: 20px;
  .crud-title {
    padding-bottom: 40px;
    font-size: $font-size-md;
  }

  .crud-operate {
    margin-top: 40px;
  }
}
</style>
