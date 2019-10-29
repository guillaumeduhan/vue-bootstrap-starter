export default {
  namespaced: true,

  state: {
    name: 'John Doe',
  },

  getters: {
    getName: (state) => state.name,
  },

  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    },
  },

  actions: {
    setName({ commit }, payload) {
      commit('SET_NAME', payload)
    },
  },
}
