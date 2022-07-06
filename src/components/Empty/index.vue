<template>
  <div class="empty-container">
    <Icon type="empty" class="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon/index.vue';
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: '无数据',
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: @gray;
  height: 100%;
  justify-content: center;
  .icon {
    font-size: 72px;
  }
  span {
    font-size: 14px;
    font-weight: bolder;
    margin-top: 20px;
  }
}
</style>
