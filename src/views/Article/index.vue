<template>
  <div class="article-container">
    <Layout>
      <BlogList />
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
};
</script>

<style lang="less" scoped>
.article-container {
  height: 100%;
}
</style>
