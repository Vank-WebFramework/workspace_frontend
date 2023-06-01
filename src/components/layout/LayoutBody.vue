<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" appear>
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "LayoutBody"
}
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter-to {
  opacity: 1;
}

/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
  opacity: 0;
}

/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
  opacity: 1;
}

/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>