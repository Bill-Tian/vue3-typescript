<template>
  <div class="logo">
    <img src="../../../assets/logo.svg" alt="">
    <h2 v-show="!collapsed" class="title">vue-admin</h2>
  </div>
</template>

<script setup lang="ts">
 defineProps({
  collapsed:{
    type:Boolean
  }
})
</script>

<style lang="scss" scoped>
    .logo{
        display: flex;
        align-items: center;
        padding-left: 14px;
        height: 64px;
        img {
            height: 32px;
        }
        .title {
            font-size: 20px;
            color: #ffffff;
            white-space: nowrap;
        }
    }
</style>
 