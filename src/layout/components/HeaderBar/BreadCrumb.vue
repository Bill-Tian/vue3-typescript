<template>
    <el-breadcrumb>
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
            {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { RouteLocationMatched, useRoute } from "vue-router";
const route = useRoute()

const breadList: Ref<RouteLocationMatched[]> = ref([]);
const getBreadData = () => {
    let matched = route.matched.filter(item => item.meta && item.meta.title && item.children.length !== 1)

    // const breadData = matched[0]
    // if (breadData.path !== '/') {
    //     matched = [{ path: '/dashboard', meta: { title: '首页' } } as any].concat(matched)
    // }

    breadList.value = matched
}

watch(route, () => {
    getBreadData()
},
    { deep: true, immediate: true }
)

</script>

<style lang="scss" scoped></style>
 