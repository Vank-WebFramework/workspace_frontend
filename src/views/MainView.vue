<template>
  <div>
    <el-backtop :bottom="100">
      <div class="btop">UP</div>
    </el-backtop>
    <el-affix :offset="0" >
      <LayoutHeader></LayoutHeader>
    </el-affix>

    <LayoutBody></LayoutBody>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutBody from "@/components/layout/LayoutBody.vue";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";

export default {
  name: "MainView",
  components: {LayoutFooter, LayoutBody, LayoutHeader}
}
</script>

<style scoped>
.btop {
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  border-radius: 50%;
  transition-duration: .5s;
}

.btop:hover {
  background-color: var(--el-color-primary);
  color: var(--el-bg-color-overlay);
}


</style>