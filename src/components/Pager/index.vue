<template>
  <div class="pager-container" v-if="totalPages > 1">
    <span @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</span>
    <span @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</span>
    <span
      @click="handleClick(n)"
      v-for="(n, i) in pageNum"
      :key="i"
      :class="{ actived: n === current }"
      >{{ n }}</span
    >
    <span @click="handleClick(current + 1)" :class="{ disabled: current === totalPages }">
      &gt;&gt;
    </span>
    <span @click="handleClick(totalPages)" :class="{ disabled: current === totalPages }">
      &gt;&gt;|
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage === this.current) return;
      if (newPage < 1) newPage = 1;
      if (newPage > this.totalPages) newPage = this.totalPages;
      this.$emit('pageChange', newPage);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.limit);
    },
    pageNum() {
      const arr = [];
      let min = parseInt(this.current - this.visibleNumber / 2);
      if (min < 1) min = 1;
      let max = min + this.visibleNumber - 1;
      if (max > this.totalPages) max = this.totalPages;
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.pager-container {
  display: flex;
  justify-content: center;
  font-size: 16px;
  span {
    margin: 0 10px;
    color: @primary;
    cursor: pointer;
    user-select: none;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.actived {
      color: @words;
      font-weight: bolder;
      cursor: auto;
    }
  }
}
</style>
