<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
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
import mainScroll from '@/mixins/mainScroll.js';
import { setFullTitle } from '@/utils';

export default {
  mixins: [mainScroll()],
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
      if (!this.singleBlog) {
        this.$router.push('/404');
        return;
      }
      this.isLoading = false;
      this.singleBlog.title && setFullTitle.setRouterTitle(this.singleBlog.title);
    },
  },
  created() {
    this.getSingleBlogData();
  },
  // 本组件的更新数据只是数据加载完成之后
  updated() {
    const hash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = hash;
    }, 50);
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
