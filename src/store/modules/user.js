const state = {
  name: undefined
}
const getters = {
  getUser: (state) => {
    return state
  },
}
const mutations = {
  setName: (state, value) => state.name = value,
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
