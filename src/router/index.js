import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "@/utils/cookie";
import main from "./main";
import other from "./other";

// 处理路由跳转报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) return originalPush.call(this, location, resolve, reject);
  return originalPush.call(this, location).catch((e) => {
  });
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, resolve, reject) {
  if (resolve || reject) return originalReplace.call(this, location, resolve, reject);
  return originalPush.call(this, location).catch((e) => {
  });
};
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
  }
});


router.beforeEach(async (to, from, next) => {
  if (["Login", "Page404", "Page401"].includes(to.name)) {
    next();
  } else {
    // 刷新页面重新登陆，更新权限
    // if (!from.name && to.name !== "Login") {
    //   next({
    //     name: "Login",
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   });
    // } else {
      const token = Cookies.get("token");
      if (token) {
        next();
      } else {
        next({
          name: "Login",
          query: {
            redirect: to.fullPath
          }
        });
      }
    // }
  }
});
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
export default router;
