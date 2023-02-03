<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">logo</el-col>
          <el-col :span="16">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="4"><span class="logout">退出登录</span></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            router
          >
            <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
              <el-icon></el-icon>
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import {useRouter} from "vue-router"
export default {
  name: "",
  setup() {
    const router = useRouter()
    // console.log(router.getRoutes());
    const list = router.getRoutes().filter(item=>item.meta.isShow)
    console.log(list);
    
    const data = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(data),
      list
    };
  },
};
</script>
<style scoped>
h2,
.logout {
  text-align: center;
  height: 80px;
  line-height: 80px;
  color: #fff;
}
.el-header {
  height: 80px;
  background-color: #666;
}
.el-menu{
  height: calc(100vh - 80px);
}
</style>
