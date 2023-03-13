<template>
    <el-tabs
      v-model="activeTabs"
      type="card"
      editable
      class="demo-tabs"
    >
      <!-- <el-tab-pane
        v-for="item in tabsList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane> -->
    </el-tabs>
  </template>
  <script lang="ts" setup>import { ref } from 'vue';

const activeTabs = ref('');
const tabsList = ref([])
  </script>
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  </style>
  