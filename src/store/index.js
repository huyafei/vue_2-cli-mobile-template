import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const modulesFile = require.context("./modules", true, /\.js$/);
const modules = {};
modulesFile.keys().forEach((key) => {
  const name = key.match(/\.\/(.*)\.js/)[1];
  modules[name] = modulesFile(key).default;
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
});
