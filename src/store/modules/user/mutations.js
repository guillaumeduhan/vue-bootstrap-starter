import { ADD_NAME } from '../../mutations-type'

export default {
  [ADD_NAME](state, payload) {
    state.name = payload
  },
}
