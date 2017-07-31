/* eslint-disable */
import { PUSH_ON_MASSAGE } from './mutation-types';

const state = {
  message: '',
};

const mutations = {
  [PUSH_ON_MASSAGE](state, param) {
    state.message = param;
  },

};

const getters = {
  getMessage() {
    return state.message;
  },

};

const actions = {
  ownMsg: ({ commit }, { param }) => {
    commit(PUSH_ON_MASSAGE, param );
  },

};

export default {
  state,
  mutations,
  getters,
  actions,
};
