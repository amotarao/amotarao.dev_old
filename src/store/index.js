import Vue from 'vue';
import Vuex from 'vuex';
import { works } from './modules/works';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    works,
  },
});
