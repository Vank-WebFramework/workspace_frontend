<template>
  <div class="container">
    <div class="sign-form">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignView"
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign-form {
  width: 450px;
  background-color: var(--el-bg-color-overlay);
  border-radius: 5px;
  padding: 20px 20px;
}

.form-header {
  margin-bottom: 20px;
  text-align: center;
  font-size: 1rem;
}

.form-footer {
}
</style>