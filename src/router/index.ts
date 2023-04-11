import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { basicRoutes } from './modules/basic'
import Layout from "@/layout/index.vue";
import { getToken } from '@/utils/storage'
import NProgress from '@/utils/nprogress'

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
      title: "用户管理", icon: "UserFilled",
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





router.beforeEach(async (to, from) => {
  NProgress.start()
  // 根据是否有 token 判断用户是否登录
  const token = getToken()

  if (!token && !PUBLIC_PATH.has(to.path))
    return { path: '/login' }

})

// 路由跳转后的监听操作
router.afterEach((to, _from) => {
  NProgress.done()
});


export default router;
