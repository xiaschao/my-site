<template>
  <div class="blogDetail-container">
    <h1>{{ blogData.title }}</h1>
    <div class="info">
      <span>日期：{{ formatDate(blogData.createDate) }}</span>
      <span>浏览：{{ blogData.scanNumber }}</span>
      <a class="link" href="#blogComment-container">评论：{{ blogData.commentNumber }}</a>
      <a class="link">{{ blogData.category.name }}</a>
    </div>
    <div class="content markdown-body" v-html="blogData.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from '@/utils';
import '@/styles/markdown.css';
import 'highlight.js/styles/github.css';
export default {
  props: {
    blogData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.blogDetail-container {
  .info {
    display: flex;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: @gray;
    span {
      margin-right: 20px;
    }
    .link {
      cursor: pointer;
      margin-right: 20px;
    }
  }
}
</style>
