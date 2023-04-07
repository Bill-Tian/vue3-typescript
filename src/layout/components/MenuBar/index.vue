<template>
  <el-menu default-active="1" class="el-menu" :collapse="collapsed" active-text-color="#409eff" text-color="#bfcbd9"
    background-color="#304156">
    <menu-item :menu-list="menuList"></menu-item>
  </el-menu>
</template>
  
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue'
import MenuItem from './MenuItem.vue'

defineProps({
  collapsed: {
    type: Boolean
  }
})
const router = useRouter()
// const menuList = router.getRoutes()
// console.log(menuList);

const menuList = reactive(
  [
    {
      path: '/',
      redirect: '/dashboard',
      meta: { title: '首页', icon: 'House' },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          meta: { title: '首页', icon: 'el-icon-house' },
        },
      ],
    },
    {
      path: "/user",
      redirect: "/user",
      name: "用户管理",
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
        }
      ]
    },
    {
      path: "/ceshi",
      name: "ceshi",
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
        },
        {
          path: "/shop",
          name: "shop",
          meta: {
            title: '商品购买',
            icon: 'Menu'
          },
        },
      ],
    }
  ]
)

</script>
  
<style lang="scss">
.el-menu {
  border: none !important;
}

.el-sub-menu {
  .el-menu-item {
    background-color: $subMenuBg;
  }
}
</style>
  