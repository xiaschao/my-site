<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from '@/components/Empty';
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 300px;
  border: 1px solid red;
}
</style>
