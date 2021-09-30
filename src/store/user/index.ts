import { Module } from 'vuex'
import userStateTypes from './types'
import RootStateTypes from '../types'

// Create a new store Modules.
const userStateTypes: Module<userStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {}
}

export default userStateTypes
