import { SET_NAME } from '../../actions-type'
import { ADD_NAME } from '../../mutations-type'

export default {
  [SET_NAME]({ commit }, payload) {
    commit(ADD_NAME, payload)
  },
}
