import { Module } from 'vuex'
import vuexExampleStateTypes from './types'
import RootStateTypes from '../types'

// Create a new store Modules.
const vuexExample: Module<vuexExampleStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: 'vuexExample',
    count: 1
  },
  mutations: {
    DOUBLE_COUNT(state: vuexExampleStateTypes) {
      state.count *= 2
    }
  },
  actions: {}
}

export default vuexExample
