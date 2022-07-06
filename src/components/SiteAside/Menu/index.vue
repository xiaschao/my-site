<template>
  <div class="menu-container">
    <a
      :href="item.url"
      v-for="(item, index) in menuData"
      :key="index"
      class="menu-list"
      :class="{ selected: isSelected(item) }"
    >
      <Icon :type="item.iconType" />
      <span>{{ item.text }}</span>
    </a>
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
        { url: '/', iconType: 'home', text: '首页' },
        { url: '/blog', iconType: 'blog', text: '文章', isStartsWith: true },
        { url: '/about', iconType: 'info', text: '关于我' },
        { url: '/project', iconType: 'code', text: '项目&效果' },
        { url: '/message', iconType: 'chat', text: '留言板' },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const pathUrl = item.url.toLowerCase();
      const localUrl = location.pathname.toLowerCase();
      if (item.isStartsWith) {
        return localUrl.startsWith(pathUrl);
      } else {
        return pathUrl === localUrl;
      }
    },
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
