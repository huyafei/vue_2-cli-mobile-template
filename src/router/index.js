import Vue from "vue";
import VueRouter from "vue-router";
import main from "./main";
import other from "./other";
Vue.use(VueRouter);

const routes = [...other, ...main];

const router = new VueRouter({
  routes,
});

export default router;
