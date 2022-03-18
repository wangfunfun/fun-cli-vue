<script lang="ts">
import { onMounted, ref, defineComponent, onBeforeUnmount } from 'vue'
import Editor from 'wangeditor'
import GeneralCache from '@/utils/general-cache'
import { IObject } from '@/@types/interface'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Editor',
  props: {
    // 文件上传地址
    uploadUrl: {
      type: String,
      default: '',
    },
    // 富文本编辑器高度
    height: {
      type: Number,
      default: 540,
    },
    // 图片转 base64
    imgBase64: {
      type: Boolean,
      default: false,
    },
    // 工具栏配置
    tools: {
      type: Array,
      default: [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'code',
        'splitLine',
        'undo',
        'redo',
      ],
    },
    // 富文本编辑器的提示文本
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n()

    const editorDom: any = ref(null)
    const editor: any = ref(null)

    const token: any = new GeneralCache('token', 'session').get()

    // 打开富文本编辑器
    const enableEditor = () => {
      editor.enable()
    }

    // 禁用富文本编辑器
    const disabledEditor = () => {
      editor.disable()
    }

    // 图片上传回调函数
    const editorUploadCallBack = (insertImgFn: any, res: IObject) => {
      if (res.code == 0) {
        insertImgFn(res.data.url)
      }
    }

    // 完成内容修改
    const contentChange = (html: string) => {
      emit('change', html)
      disabledEditor()
    }

    // 内容回显
    const setEditorHtml = (data: any) => {
      editor.value.txt.html(data)
    }

    // 初始化
    onMounted(() => {
      editor.value = new Editor(editorDom.value)
      editor.value.config.height = props.height
      editor.value.config.onchange = contentChange
      editor.value.config.uploadImgShowBase64 = props.imgBase64
      editor.value.config.uploadImgServer = props.uploadUrl
      editor.value.config.uploadImgHeaders = {
        Authorization: 'Bearer ' + token,
      }
      editor.value.config.uploadFileName = 'file'
      editor.value.config.uploadImgHooks.customInsert = editorUploadCallBack
      editor.value.config.menus = props.tools
      editor.value.config.placeholder =
        props.placeholder || t('crud.placeholder.enter')
      editor.value.create()
    })

    onBeforeUnmount(() => {
      editor.destroy()
    })

    return {
      editor,
      editorDom,
      enableEditor,
      disabledEditor,
      editorUploadCallBack,
      contentChange,
      setEditorHtml,
    }
  },
})
</script>

<template>
  <div ref="editorDom"></div>
</template>

<style lang="scss" scoped></style>
