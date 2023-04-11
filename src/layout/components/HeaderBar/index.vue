<template>
    <div class="navHeader">
        <BreadCrumb />
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                Admint<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :icon="UserFilled">个人信息</el-dropdown-item>
                    <el-dropdown-item :icon="SwitchButton" @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import BreadCrumb from './BreadCrumb.vue';
import { UserFilled, SwitchButton } from '@element-plus/icons-vue'
import { removeToken } from '@/utils/storage'

const logout = () => {
    removeToken()
    location.reload()
}
</script>

<style lang="scss" scoped>
.navHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
 