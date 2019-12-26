const state = {
  name: 'John Doe',
}

const mutations = {
  SET_NAME(state, payload) {
    state.name = payload
  },
}

const getters = {
  getName: (state) => state.name,
}

const actions = {
  setName({ commit }, payload) {
    commit('SET_NAME', payload)
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
