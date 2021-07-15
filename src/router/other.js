const other = [
  {
    path: "/",
    redirect: "/home/index",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  { path: "*", redirect: "/401" },
  {
    path: "/401",
    name: "Page401",
    meta: {
      title: "提示",
    },
    component: () =>
      import(/* webpackChunkName: "pageError" */ "../views/401.vue"),
  },
];
export default other;
