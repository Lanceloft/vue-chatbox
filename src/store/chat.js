/* eslint-disable */
import { PUSH_ON_MASSAGE } from './mutation-types';

const state = {
  message: [],
};

const mutations = {
  [PUSH_ON_MASSAGE](state, param) {
    console.log(param);
  },

};

const getters = {
  getMessage() {
    return state.massage;
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
