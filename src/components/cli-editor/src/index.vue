<script lang="ts">
/**
 * wangEditor V5 富文本编辑器组件二次封装
 * ===============================================
 * == 文档地址：https://www.wangeditor.com/      ==
 * == V5文档地址：https://www.wangeditor.com/v5/ ==
 * ===============================================
 * @mode 模式
 * @id 全局唯一id
 * @placeholder 默认提示语
 */

import { defineComponent, onBeforeUnmount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor,
} from '@wangeditor/editor-for-vue'

export default defineComponent({
  name: 'cli-editor',
  components: { Editor, Toolbar },
  props: {
    mode: {
      type: String,
      default: 'default',
    },
    id: {
      type: String,
      default: 'editor',
    },
    placeholder: {
      type: String,
      default: '',
    },
    toolbarConfig: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n()

    const editorId = props.id

    const toolbarConfig = props.toolbarConfig
    const editorConfig = {
      placeholder:
        props.placeholder ||
        t('crud.placeholder.enter', { label: t('label.content') }),
    }

    onBeforeUnmount(() => {
      const editor = getEditor(editorId)
      if (editor == null) return

      editor.destroy()
      removeEditor(editorId)
    })

    return {
      editorId,
      mode: props.mode,
      toolbarConfig,
      editorConfig,
    }
  },
})
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :mode="mode"
      style="height: 500px; overflow-y: hidden"
    />
  </div>
</template>

<style src="@wangeditor/editor/dist/css/style.css"></style>
