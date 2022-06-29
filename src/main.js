import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import axios from "./utils/axios";
import Cookies from "@/utils/cookie";
import momment from "moment";
import vConsole from "vconsole";

import * as echarts from "echarts";
import * as filters from "./filters";
import * as componetns from "./components";

/**
 * css
 */
import "./assets/styles/css/common.css";
import "./assets/styles/css/reset.css";
/**
 * less
 */
import "./assets/styles/less/index.less";

/**
 * vant
 */
import { Button, Search, Tabbar, TabbarItem } from "vant";

Vue.use(Button)
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem);


// 调接口可以去掉
if (process.env.NODE_ENV === "development") {
  require("../mock");
}

if (["dev", "uat"].includes(process.env.VUE_APP_env)) {
  Vue.prototype.$vConsole = new vConsole();
}

Vue.prototype.$axios = axios;
Vue.prototype.$cookies = Cookies;
Vue.prototype.$momment = momment;
Vue.prototype.$echarts = echarts;

// 注册全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

/**
 * 自定义组件
 */
Object.keys(componetns).forEach((key) => {
  Vue.component(componetns[key].name, componetns[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
