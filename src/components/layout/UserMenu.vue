<template>
  <el-dropdown @command="handleCommand" size="large">
    <div class="avatar-container">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="menu in menus" :command="menu.route">
          <el-icon>
            <component :is="menu.icon"/>
          </el-icon>
          {{ menu.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>


export default {
  name: "UserMenu",
  data() {
    return {
      menus: [
        {
          title: '我的主页',
          route: {name: 'userProfile'},
          icon: 'User'
        },
        {
          title: '设置',
          route: {},
          icon: 'Setting'
        },
        {
          title: '退出',
          route: {},
          icon: 'SwitchButton'
        }
      ]
    }
  },
  methods: {
    async getUserMenu() {
      console.log('获取用户菜单')
    },
    handleCommand(route) {
      // push到对应的路由
      this.$router.push(route)
    }
  },

}
</script>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
}
</style>