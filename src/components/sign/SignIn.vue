<template>
  <el-form :model="form">
    <div class="form-header">
      <h2>登陆🐝</h2>
    </div>
    <el-form-item>
      <el-input v-model="form.username" placeholder="账号"/>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" placeholder="密码" type="password" show-password/>
    </el-form-item>
    <el-button type="primary" style="width: 100%" @click="submit">登陆</el-button>
  </el-form>
  <el-divider content-position="center" border-style="dashed">第三方登陆</el-divider>
  <div class="social-login">
    <div class="social-login-item">
      <Wechat></Wechat>
    </div>
    <div class="social-login-item">
      <QQ></QQ>
    </div>
  </div>
</template>

<script>
import Wechat from "@/components/icon/Wechat.vue";
import QQ from "@/components/icon/QQ.vue";

export default {
  name: "SignIn",
  components: {QQ, Wechat},
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    async submit() {
      //登陆
    }
  }
}
</script>

<style scoped>
.social-login {
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
}

.social-login-item {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-mute);
  border-radius: 50%;
  cursor: pointer;
}
</style>