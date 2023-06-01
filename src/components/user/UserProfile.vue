<template>
  <div class="container">
    <div class="profile-container">
      <!--用户信息头-->
      <div class="profile-header"></div>
      <!--用户信息-->
      <div class="profile-body">
        <div class="profile-main">
          <div class="tab-container">
            <div class="tab-header">
              <div class="tab-header-item ">
                <router-link :to="{name:'userArticle'}">文章</router-link>
              </div>
              <div class="tab-header-item">
                <router-link :to="{name:'userComment'}">评论</router-link>
              </div>
              <div class="tab-header-item">
                <router-link :to="{name:'userFavorite'}">收藏</router-link>
              </div>
            </div>
            <div class="tab-content">
              <router-view></router-view>
            </div>
          </div>
        </div>
        <div class="profile-side "></div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "UserProfile"
}
</script>

<style scoped>
.profile-container {
  width: var(--container-large-width);
  margin: 10px auto;
}


.profile-header {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
}

.profile-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.profile-main {
  width: 650px;
}

.profile-side {
  width: 340px;
}

.profile-header, .profile-main, .profile-side {
  background-color: var(--color-background-soft);
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
}

.profile-main, .profile-side {
  padding: 10px;
}

.tab-header {
  overflow-x: scroll;
  display: flex;
  height: 40px;
  line-height: 40px;
  position: relative;
}

.tab-header::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}

.tab-header-item {
  line-height: inherit;
  /*禁止拉伸、压缩*/
  flex-shrink: 0;
  font-size: 18px;
  color: var(--el-text-color-regular);
  transition-duration: .5s;
}

.tab-header-item:hover > a {
  background-color: transparent;
  color: var(--el-color-primary);
}

.active {
  color: var(--el-color-primary);
}

.active::before {
  content: "";
  position: absolute;
  height: 3px;
  background-color: var(--el-color-primary);
  width: 36px;
  bottom: 0;

}

.tab-header-item + .tab-header-item {
  margin-left: 15px;
}
</style>