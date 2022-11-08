/**
 * @name: setup
 * @description：setup.js
 * @date: 2022/11/3 14:09
 * @author: yf_hu
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./lang";
// 引入组件
import "./components";
// 加载插件
import "./plugins";
import "lib-flexible";

import * as filters from "./filters";

import "./assets/styles/css/main.css";
import "./assets/styles/less/index.less";

// 注册全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
