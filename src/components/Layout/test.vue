<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="middle">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './';
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 1000px;
  height: 600px;
  border: 2px red solid;
  margin: 0 auto;
  .left {
    width: 300px;
    height: 100%;
    background-color: aquamarine;
  }
  .middle {
    background-color: red;
    height: 100%;
  }
  .right {
    width: 300px;
    height: 100%;
    background-color: #008c8c;
  }
}
</style>
