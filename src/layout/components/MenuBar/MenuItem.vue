<template>
    <template v-for="item in menuList" :key="item.path">
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon" />
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <menu-item :menu-list="item.children"></menu-item>
        </el-sub-menu>
        <el-menu-item @click="() => toPath(item.path)" :index="item.path" v-else>
            <el-icon>
                <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


defineProps(['menuList'])

const router = useRouter()
const toPath = (path: string) => {
    router.push({
        path
    })
}

</script>

<style lang="scss" scoped></style>
 