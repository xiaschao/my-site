<template>
  <div class="article-container">
    <Layout>
      <BlogList></BlogList>
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from './components/BlogList.vue';
import BlogCategory from './components/BlogCategory.vue';
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
  created() {
    // console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.article-container {
  height: 100%;
}
</style>
