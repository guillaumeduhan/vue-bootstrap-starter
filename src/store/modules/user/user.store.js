import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  strict: process.env.NODE_ENV !== 'production',
})

export default userStore
