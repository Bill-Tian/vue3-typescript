<template>
  <el-tabs v-model="activeTabs" type="card" editable class="demo-tabs" @tab-click="tabClick" @tab-remove="tabRemove">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.title" :name="item.path">
      {{ item.title }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { tabsCounterStoreWithOut } from '@/store/modules/tabs'
import { useRoute, useRouter } from 'vue-router'
import type { Itab } from '@/store/type'

const route = useRoute()
const router = useRouter()
const tabStore = tabsCounterStoreWithOut()

const activeTabs = ref('');
const tabsList = computed(() => {
  return tabStore.getAddTab
})

// 添加tab
const addTab = () => {
  const { meta, path } = route
  const tabItem: Itab = {
    path,
    title: meta.title as string
  }
  tabStore.addTab(tabItem)
}

watch(route, () => {
  activeTabs.value = route.path
  addTab()
})

// 点击tabs
const tabClick = (event: any) => {
  router.push({ path: event.props.name })
}

// 删除tabs
const tabRemove = (event: any) => {
  if (tabsList.value.length === 1) {
    return
  }
  console.log(activeTabs.value);
  if (activeTabs.value === event) {
    tabsList.value.forEach((item: Itab, index: number) => {
      if (item.path === event) {
        const nextTab = tabsList.value[index - 1] || tabsList.value[index + 1]
        if (nextTab) {
          activeTabs.value = nextTab.path
        }
      }
    })
  }

  tabStore.removeTab(event)
}

// 刷新保存
const refresh = () => {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('TAB_ROUTERS', JSON.stringify(tabsList.value))
    sessionStorage.setItem('ACTIVE_NAME', activeTabs.value)
  })

  const seeion = sessionStorage.getItem('TAB_ROUTERS')
  const active = sessionStorage.getItem('ACTIVE_NAME')
  if (seeion) {
    const tabItem = JSON.parse(seeion)
    tabItem.forEach((item: Itab) => {
      tabStore.addTab(item)
    })
  }
  if (active) {
    activeTabs.value = active
  }
}

onMounted(() => {

  refresh()
  if (tabsList.value.length < 1) {
    addTab()
    activeTabs.value = '/dashboard'
  }

})

</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
  