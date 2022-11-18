/**
 * @name: index
 * @description: index.js
 * @date: 2022/10/20 9:54
 * @author: yf_hu
 */
const modules = require.context("@/plugins/modules/", true, /\.js$/);

modules.keys().forEach((modulesKey) => {
  const module = modules(modulesKey);
});
