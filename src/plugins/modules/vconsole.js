/**
 * @name: vconsole
 * @description: vconsole.js
 * @date: 2022/10/21 15:33
 * @author: yf_hu
 */
import Vue from "vue";
import vConsole from "vconsole";

if (["uat"].includes(process.env.VUE_APP_PROJECT_ENV)) {
  Vue.prototype.$vConsole = new vConsole();
}
