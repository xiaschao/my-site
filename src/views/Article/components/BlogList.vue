<template>
  <div class="blogList-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in blogListData.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formateDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="blogListData.total"
      :current="this.routeInfo.page"
      :total="this.blogListData.total"
      :limit="this.routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import { getBlog } from '@/api/article.js';
import { formateDate } from '@/utils/index.js';
export default {
  components: {
    Pager,
  },
  data() {
    return {
      blogListData: {},
      isLoading: true,
    };
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async getData() {
      this.isLoading = true;
      this.blogListData = await getBlog(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      this.isLoading = false;
      // console.log(this.blogListData);
    },
    formateDate,
    handlePageChange(newPage) {
      // console.log(newPage);
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: 'Article',
          query,
        });
      } else {
        this.$router.push({
          name: 'Article',
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  created() {
    this.getData();
  },
  watch: {
    $route() {
      // console.log('路由变化了');
      this.$refs.container.scrollTop = 0;
      this.getData();
    },
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.blogList-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
