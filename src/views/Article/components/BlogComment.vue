<template>
  <div id="blogComment-container">
    <h3>留下你的评论吧</h3>
    <MessageArea
      title="评论列表"
      :subTitle="`(${commentData.total})`"
      :list="commentData.rows"
      @submit="handleSubmit"
      :isListLoading="isLoading"
      :hasMore="isHasMore"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import { getComments, postComments } from '@/api/article.js';
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      isLoading: true,
      commentData: {
        total: 0,
        rows: [],
      },
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async getCommentData() {
      this.commentData = await getComments(this.blogId, this.page, this.limit);
      this.isLoading = false;
    },
    async handleSubmit(data, callback) {
      // console.log(data);
      const resp = await postComments({
        ...data,
        blogId: this.blogId,
      });
      this.commentData.rows.unshift(resp);
      this.commentData.total++;
      callback('提交成功');
    },
    async loadMore() {
      if (!this.isHasMore) return;
      this.isLoading = true;
      this.page++;
      const data = await getComments(this.blogId, this.page, this.limit);
      this.total = data.total;
      this.commentData.rows = this.commentData.rows.concat(data.rows);
      this.isLoading = false;
    },
    handleMainScroll(dom) {
      if (this.isLoading || !dom) return;
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) this.loadMore();
    },
  },
  computed: {
    blogId() {
      return this.$route.params.articleId;
    },
    isHasMore() {
      return this.commentData.rows.length < this.commentData.total;
    },
  },
  created() {
    this.getCommentData();
    // window.loadMore = this.loadMore;
    this.$bus.$on('mainScroll', this.handleMainScroll);
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleMainScroll);
  },
};
</script>

<style lang="less" scoped>
#blogComment-container {
  margin-top: 40px;
  position: relative;
  h3 {
    margin-bottom: 30px;
  }
}
</style>
