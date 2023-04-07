import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import {basicRoutes} from './modules/basic'
import Layout from "@/layout/index.vue";
import {getToken} from '@/utils/storage'

// 定义一个公共路径集合，任何用户及匿名者都能访问的到
export const PUBLIC_PATH = new Set()
basicRoutes.forEach((item) => PUBLIC_PATH.add(item.path))

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



router.beforeEach(async (to) => {
  // 根据是否有 token 判断用户是否登录
  const token = getToken()
  // 如果[未登录]且要访问[不在]公共路径集合里的路径时，跳转到登录页面并记录之前的页面用于重新访问
  if (!token && !PUBLIC_PATH.has(to.path))
    return {path: '/login', query: {redirect: to.fullPath}}
  // const userStore = useUserStore()
  // 如果已登录但因为刷新后导致保存在内存中的数据(登录信息，动态添加的路由等)丢失，
  // 需要再次发起请求重新获取用户信息，并动态添加路由
  if (token) {
    // 要添加个catch处理错误
    return to
  }
})


export default router;
