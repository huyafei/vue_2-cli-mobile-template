import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";

import momment from "moment";
import axios from "./utils/axios";
import Cookies from "js-cookie";
import * as echarts from "echarts";
import * as filters from "./filters";
import * as componetns from "./components";

/**
 * vant
 */
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
/**
 * css
 */
import "./assets/styles/css/common.css";
import "./assets/styles/css/reset.css";
/**
 * less
 */
import "./assets/styles/less/index.less";

Vue.prototype.$axios = axios;
Vue.prototype.$cookies = Cookies;
Vue.prototype.$echarts = echarts;
Vue.prototype.$momment = momment;
/**
 * 过滤器
 */
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
  render: (h) => h(App),
}).$mount("#app");
