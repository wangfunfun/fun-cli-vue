import { IObject } from '@/@types/interface'

const t: IObject = {}

t.example = {}

t.example.editor = {}
t.example.editor.title = '基于 wangEditor V5 版本封装的富文本编辑器组件'

t.example.icon = {}
t.example.icon.title =
  '系统提供了一些自定义的Svg图标，你可以使用系统自带的cli-svg-icon组件使用这些图标。提供的大部分图标是基于xicons的ionicons5图标库进行实现的，参考网址：https://www.xicons.org/#/'

t.example.map = {}
t.example.map.title =
  '基于高德地图进行二次封装，该示例仅展示了如何在Vue3下使用，更多的功能请参考文档实现'
export default t
