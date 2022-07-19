<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blogData="singleBlog" v-if="singleBlog" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="toc-container" v-loading="isLoading">
        <BlogTOC :TOCData="singleBlog.toc" v-if="singleBlog" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import { getSingleBlog } from '@/api/article.js';
import BlogDetail from './components/BlogDetail.vue';
import BlogTOC from './components/BlogTOC.vue';
import BlogComment from './components/BlogComment.vue';

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  data() {
    return {
      isLoading: true,
      singleBlog: null,
    };
  },
  methods: {
    async getSingleBlogData() {
      this.singleBlog = await getSingleBlog(this.$route.params.articleId);
      this.isLoading = false;
    },
  },
  created() {
    this.getSingleBlogData();
  },
};
</script>

<style lang="less" scoped>
.main-container {
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.toc-container {
  width: 250px;
  position: relative;
  height: 100%;
}
</style>
