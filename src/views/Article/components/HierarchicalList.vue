<template>
  <ul class="hierarchicalList-container">
    <li v-for="(item, i) in list" :key="i">
      <div class="info" @click="handleClick(item)" :class="{ active: item.isSelected }">
        <span>{{ item.name }}</span>
        <span class="aside" :class="{ active: item.isSelected }" v-if="item.articleCount">
          {{ item.articleCount }}篇
        </span>
      </div>
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
      if (!data.isSelected) this.$emit('select', data);
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
    .info {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 14px;
      .aside {
        color: @gray;
        margin-left: 10px;
        font-size: 13px;
        &.active {
          color: @warn;
          font-weight: bold;
        }
      }
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }
  }
}
</style>
