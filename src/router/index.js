import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";
import main from "./main";
import other from "./other";
Vue.use(VueRouter);

const routes = [...other, ...main];

const router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach(async (to, from, next) => {
  console.log(to, from);
  if (["Login", "Page404", "Page401"].includes(to.name)) {
    next();
  } else {
    if (from.name == null && to.name !== "Login") {
      //刷新页面重新登陆，更新权限
      next({
        name: "Login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      const token = Cookies.get("token");
      if (token && token !== "undefined") {
        next();
      } else {
        next({
          name: "Login",
          query: {
            redirect: to.fullPath,
          },
        });
      }
    }
  }
});
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
