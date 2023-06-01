<template>
  <div>我的文章{{ count }}</div>
  <button @click="add">点击</button>
</template>

<script>
export default {
  name: "UserArticle",
  data() {
    return {
      count: 1
    }

  },
  methods: {
    add() {
      this.count += 1
    }
  }
}
</script>

<style scoped>

</style>