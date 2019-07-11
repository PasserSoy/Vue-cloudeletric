<template>
  <div>
    <router-link to="/index">增删改查</router-link>
    <router-link to="/index/page2">echarts</router-link>
    <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/index">增删改查</el-menu-item>
      <!-- <el-menu-item index="1"><router-link to="/index">增删改查</router-link></el-menu-item> -->
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- <el-menu-item index="3"><router-link to="/index/page2">echarts</router-link></el-menu-item> -->
      <el-menu-item index="/index/page2">echarts</el-menu-item>
      <el-menu-item index="4" @click="exit">退出</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      exit(){
        this.$router.replace({path:'/login'});
      }
    }
  }
</script>
<style>
.router-link-exact-active {
  background: teal;
}
</style>

