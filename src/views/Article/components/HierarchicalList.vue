<template>
  <ul class="hierarchicalList-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelected }">{{ item.name }}</span>
      <!-- 组件递归 -->
      <HierarchicalList :list="item.children" @select="handleClick" v-if="item.children" />
    </li>
  </ul>
</template>

<script>
import '@/styles/global.less';
export default {
  name: 'HierarchicalList',
  props: {
    // [{name: 'xxx', isSelected: true, children: {name: 'xxx', isSelected: true, children: []}},...]
    list: {
      type: Array,
      // 对象或数组的默认值必须从一个工厂函数返回。（vue官网原话）
      default: () => [],
    },
  },
  methods: {
    handleClick(data) {
      this.$emit('select', data);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.hierarchicalList-container {
  .hierarchicalList-container {
    margin-left: 20px;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    span {
      cursor: pointer;
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }
  }
}
</style>
