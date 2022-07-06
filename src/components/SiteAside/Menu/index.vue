<template>
  <div class="menu-container">
    <router-link
      v-for="(item, index) in menuData"
      :to="{ name: item.name }"
      :key="index"
      class="menu-list"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="item.iconType" />
      <span>{{ item.text }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuData: [
        { name: 'Home', iconType: 'home', text: '首页', exact: true },
        { name: 'Article', iconType: 'blog', text: '文章', exact: false }, // exact 激活状态是否啊要精确匹配
        { name: 'About', iconType: 'info', text: '关于我', exact: true },
        { name: 'Project', iconType: 'code', text: '项目&效果', exact: true },
        { name: 'Message', iconType: 'chat', text: '留言板', exact: true },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';

.menu-container {
  color: @gray;
  font-size: 16px;
  .menu-list {
    display: block;
    height: 45px;
    line-height: 45px;
    padding-left: 30px;
    .icon-container {
      font-size: 20px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background-color: #2d2d2d;
    }
    span {
      margin-left: 10px;
      vertical-align: 2px;
    }
  }
}
</style>
