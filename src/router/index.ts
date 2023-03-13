import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/HomeView.vue'),
        meta: { title: '首页', icon: 'House' },
      },
    ],
  },
  {
    path: "/user",
    redirect: "/user",
    name: "用户管理",
    component: Layout,
    meta: {
      title: "用户管理",icon: "UserFilled",
    },
    children: [
      {
        path: "/user",
        name: "user",
        meta: {
          title: '用户列表',
          icon: 'Location'
        },
        component: () => import("../views/UserView.vue"),
      }
    ]
  },
  {
    path: "/ceshi",
    name: "ceshi",
    component: Layout,
    meta: {
      title: '父级菜单',
      icon: 'Menu'
    },
    children: [
      {
        path: "/goods",
        name: "goods",
        meta: {
          title: '商品列表',
          icon: 'Menu'
        },
        component: () => import("../views/GoodsView.vue"),
      },
      {
        path: "/shop",
        name: "shop",
        meta: {
          title: '商品购买',
          icon: 'Menu'
        },
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
