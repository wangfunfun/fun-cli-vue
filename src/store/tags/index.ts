import { Module } from 'vuex'
import tagsStateTypes from './types'
import rootStateTypes from '../types'
import Storage from '../../utils/storage'

// 管理系统 tags 标签配置
const layout: Module<tagsStateTypes, rootStateTypes> = {
  namespaced: true,
  state: {
    SHOW_TAGS: true, // 是否显示tags组件
    TAGS_LIST: [], // tags列表
    CURRENT_TAG: {}, // 当前的标签
    FIRST_TAG: {} // 首次加载的标签
  },
  mutations: {
    // 设置首标签（首次加载时）

    setFirstTag(state: tagsStateTypes, data) {
      state.FIRST_TAG = data
      new Storage('FIRST_TAG', 'local', data).set()
    },

    // 设置当前选中的tag（临时有效）

    setCurrentTag(state: tagsStateTypes, data) {
      state.CURRENT_TAG = data
      new Storage('CURRENT_TAG', 'session', data).set()
    },

    // 仅保留当前

    onlyNowTag(state: tagsStateTypes) {},

    // 全部关闭，关闭后默认展示设置的首标签

    closeAllTag(state: tagsStateTypes) {
      const firstTag: any = new Storage('FIRST_TAG', 'local').get()
      state.TAGS_LIST = [firstTag.save_data]
      new Storage('CURRENT_TAG', 'session').remove()
      new Storage('TAG_LIST', 'session').remove()
    },

    // 更新标签列表
    updateTagsList(state: tagsStateTypes, data) {
      state.TAGS_LIST = data
    }
  },
  actions: {
    // 动态添加新tag

    addTag({ commit, state }, data) {
      if (state.TAGS_LIST.length == 0) {
        state.TAGS_LIST = [data]
      } else {
        let mapRes = false
        state.TAGS_LIST.map((item: any, index: number) => {
          if (item.path == data.path) {
            mapRes = true
            state.TAGS_LIST[index] = data
          }
        })
        if (!mapRes) {
          state.TAGS_LIST.push(data)
        }
      }
      commit('setCurrentTag', data)
      new Storage('TAG_LIST', 'session', state.TAGS_LIST).set()
    },

    // 动态移除tag

    removeTag({ commit, state }, data) {
      // if(data.queryRes.path == state.currentTag.path){
      // }
      // state.TAGS_LIST.splice(data.queryIndex, 1)
      // if (data.queryIndex == 0) {
      //   commit('setCurrentTag', state.TAGS_LIST[0])
      //   return
      // }
    }
  }
}

export default layout
