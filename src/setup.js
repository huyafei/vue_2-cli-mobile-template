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
import "lib-flexible";

// 引入组件
import "./components";
// 加载插件
import "./plugins";

import "./assets/styles/css/main.css";
import "./assets/styles/less/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
