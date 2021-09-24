import { Module } from 'vuex'
import layoutStateTypes from './types'
import rootStateTypes from '../types'

// 管理系统 layout 布局配置
const layout: Module<layoutStateTypes, rootStateTypes> = {
  namespaced: true,
  state: {
    // 管理系统布局方式，可选 layoutA、layoutB
    ADMINSYS_LAYOUT_METHOD: 'layoutA',
    // 是否显示 tab 标签
    ADMINSYS_LAYOUT_TAB: false,
    // header 右侧工具栏的配置
    ADMINSYS_LAYOUT_HEADEROPS: {
      showRefresh: true, // 显示刷新视图按钮
      showFullScreen: true, // 显示全屏按钮
      fullScreen: false, // 全屏状态
      showTheme: true, // 显示切换主题按钮
      showMessage: true, // 显示我的消息按钮
      showLanguage: true, // 显示切换语言按钮
      height: '60px' // header 高度
    },
    // tags标签配置
    ADMINSYS_LAYOUT_TAGSOPS: {
      showTags: true, // 是否显示tags组件
      tagsList: [], // tags列表
      currentTag: '' // 当前的标签
    },
    // footer 需要显示的内容
    ADMINSYS_LAYOUT_FOOTEROPS: {
      nowRouter: true, // 正在浏览的位置
      nowPath: '', // 当前正在浏览
      nowUserName: true, // 当前登录人
      loginDatetime: true, // 登录时间
      systemName: true, // 系统名称
      sysVersion: true // 系统版本
    },
    // aside 侧栏配置
    ADMINSYS_LAYOUT_ASIDEOPS: {
      width: '200px', // 侧栏宽度
      showLogo: true, // 是否显示LOGO区域
      logoHeight: '150px', // logo 的高度,
      unfold: false, // 侧栏是展开状态
      onlyOpen: true // 是否只保持一个菜单处于打开状态
    }
  },
  mutations: {
    // 展开 / 缩放 aside
    unfoldAside(state: layoutStateTypes) {
      state.ADMINSYS_LAYOUT_ASIDEOPS.unfold = !state.ADMINSYS_LAYOUT_ASIDEOPS.unfold
    },
    // 更新当前浏览位置
    updateNowPath(state: layoutStateTypes, data) {
      state.ADMINSYS_LAYOUT_FOOTEROPS.nowPath = data
    },
    // 设置首标签
    setFirstTag(state: layoutStateTypes, data) {
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList = [data]
      state.ADMINSYS_LAYOUT_TAGSOPS.currentTag = data.path
    },
    // 添加新tag
    addTag(state: layoutStateTypes, data) {
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList.push(data)
    },
    // 移除tag
    removeTag(state: layoutStateTypes, data) {
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList.splice(data.index, 1)
    },
    // 仅保留当前
    only(state: layoutStateTypes, data) {
      let arr: Array<[]> = []
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList.map((item, index) => {
        if (index == data.index) {
          arr.push(item)
        }
      })
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList = arr
    },
    // 全部关闭
    close(state: layoutStateTypes) {
      state.ADMINSYS_LAYOUT_TAGSOPS.tagsList = []
    }
  }
}

export default layout
