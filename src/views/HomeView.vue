<template>
  <div class="common-layout">
    首页
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import {useRouter} from "vue-router"
export default {
  name: "",
  setup() {
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
