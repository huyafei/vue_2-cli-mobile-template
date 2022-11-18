/**
 * @name: index
 * @description: index.js
 * @date: 2022/10/20 9:53
 * @author: yf_hu
 */
import Vue from "vue";

const modules = require.context("@/components", true, /\.vue$/);
const prefix = "Ven";

modules.keys().forEach((modulesKey) => {
  const component = modules(modulesKey).default;
  const componentName = `${prefix}${component.name}`;
  Vue.component(componentName, component);
});
