<template>
  <div class="toTop-container" v-show="isShow" @click="handleClick">
    <Icon type="arrowUp" />
  </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  components: {
    Icon,
  },
  created() {
    this.$bus.$on('mainScroll', this.handleMainScroll);
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleMainScroll(dom) {
      // console.log(dom);
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop >= 1000;
    },
    handleClick() {
      this.$bus.$emit('setMainScroll', 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@size: 50px;
.toTop-container {
  background-color: @primary;
  width: @size;
  height: @size;
  line-height: @size;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  z-index: 99;
  position: fixed;
  right: @size;
  bottom: @size;
  cursor: pointer;
  font-size: 20px;
}
</style>
