<template>
  <div class="blogCategory-container" v-loading="isLoading">
    <h2 id="title">文章分类</h2>
    <HierarchicalList :list="categoryDataRes" @select="handleSelect"></HierarchicalList>
  </div>
</template>

<script>
import HierarchicalList from './HierarchicalList.vue';
import { getBlogType } from '@/api/article.js';
export default {
  components: {
    HierarchicalList,
  },
  data() {
    return {
      blogCategoryData: [],
      isLoading: true,
    };
  },
  methods: {
    async getCategoryData() {
      this.blogCategoryData = await getBlogType();
      this.isLoading = false;
      // console.log(this.blogCategoryData);
    },
    handleSelect(item) {
      console.log(item);
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: 'Article',
          query,
        });
      } else {
        this.$router.push({
          name: 'ArticleCategory',
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  created() {
    this.getCategoryData();
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    categoryDataRes() {
      const res = [
        {
          id: -1,
          name: '全部',
          articleCount: this.blogCategoryData.reduce((o1, o2) => o1 + o2.articleCount, 0),
        },
        ...this.blogCategoryData,
      ];
      return res.map((item) => {
        return {
          ...item,
          isSelected: item.id === this.categoryId,
        };
      });
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
  },
};
</script>

<style lang="less" scoped>
.blogCategory-container {
  height: 100%;
  width: 250px;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  #title {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.3em;
    margin-bottom: 20px;
  }
}
</style>
