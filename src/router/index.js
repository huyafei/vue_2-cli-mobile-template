import Vue from "vue";
import VueRouter from "vue-router";
import main from "./main";
import other from "./other";
Vue.use(VueRouter);

const routes = [...other, ...main];

const router = new VueRouter({
  routes,
});
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
