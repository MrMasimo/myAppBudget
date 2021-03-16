import Vue from "vue";
import Vuex from "vuex";
import budgetData from './modules/budgetData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  modules: {budgetData},
});
