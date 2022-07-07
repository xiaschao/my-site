<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: '评论成功',
        container: this.$refs.container,
        type: 'success',
        callback: () => {
          console.log('触发回调函数');
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  background-color: lightgreen;
  width: 300px;
  height: 400px;
}
</style>
