<template>
    <div class="scrollbar-demo-item" @click="tabClick(itemInfo)" :class="active ? 'active' : ''">
        <span >{{ itemInfo?.title }}</span>
        <el-icon>
            <Close @click.stop="tabRemove(itemInfo?.path)" />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { defineEmits } from "vue"
const router = useRouter()
defineProps({
    itemInfo: {
        type: Object
    },
    active: {
        type: Boolean
    }
})

// 点击tabs
const tabClick = (item: any) => {
    router.push({ path: item.path })
}

// 关闭按钮
const emit = defineEmits(['tabRemove'])
const tabRemove = (path: string) => {
    emit('tabRemove', path)
}

</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 26px;
    margin: 4px 5px 0;
    padding: 0 8px;
    text-align: center;
    border-radius: 2px;
    /* background: var(--el-color-danger-light-9); */
    /* color: var(--el-color-danger); */
    border: 1px solid #d8dce5;
    cursor: pointer;

    span {
        padding: 0 8px;
    }
}

.scrollbar-demo-item:hover {
    background-color: rgba(0, 0, 0, 0.06);
}

.active {
    background-color: #409eff;
    border: 1px solid #409eff;
    color: #ffffff;

    &:hover {
        background-color: #409eff;
    }
}
</style>
 