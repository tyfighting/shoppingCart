import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/father",
    name: "Father",
    component: () => import("../views/Father.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
