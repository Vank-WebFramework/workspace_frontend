<template>
  <el-menu
      class="custom-menu"
      mode="horizontal"
      :ellipsis="false"
      router
      default-active="1"
  >
    <el-menu-item>WorkSpace</el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="1" :route="{name:'index'}">首页</el-menu-item>
    <el-menu-item index="2" :route="{name:'articleList'}">文章</el-menu-item>

    <el-menu-item index="10" :route="{name:'about'}">关于</el-menu-item>
    <el-menu-item index="3" :route="{name:'signin'}" v-if="false">登陆/注册</el-menu-item>
    <UserMenu v-else/>
  </el-menu>
</template>

<script>
import UserMenu from "@/components/layout/UserMenu.vue";

export default {
  name: "LayoutHeader",
  components: {UserMenu}
}
</script>

<style scoped>

</style>