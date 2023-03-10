import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Loyout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Loyout,
    children: [
      {
        path: "/goods",
        name: "goods",
        meta: {
          isShow: true,
          title: '商品列表'
        },
        component: () => import("../views/GoodsView.vue"),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          isShow: true,
          title: '用户列表'
        },
        component: () => import("../views/UserView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
