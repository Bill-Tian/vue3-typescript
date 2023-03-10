<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="autoWidth">
                <LogoBar :collapsed="collapsed" />
                <MenuBar :collapsed="collapsed" />
            </el-aside>
            <el-container>
                <el-header>
                    <el-row>
                        <el-icon @click="() => (collapsed = !collapsed)" class="exicon">
                            <component :is="collapsed ? Expand : Fold"></component>
                        </el-icon>
                    </el-row>

                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'
import { Expand, Fold } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';

const collapsed = ref<boolean>(false)

const autoWidth = computed(() => {
    {
        if (collapsed.value) {
            return '64px'
        } else {
            return '200px'
        }
    }
})

</script>

<style lang="scss">
.common-layout {
    display: flex;
    height: 100vh;

    .exicon {
        font-size: 26px;
        cursor: pointer;
    }

    .el-aside {
        background-color: $menuBg;
        overflow: hidden;
    }

    .el-header {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        background-color: powderblue;
    }
}
</style>
 