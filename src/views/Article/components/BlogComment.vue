<template>
  <div id="blogComment-container">
    <h3>留下你的评论吧</h3>
    <MessageArea
      title="评论列表"
      :subTitle="`(${commentData.total})`"
      :list="commentData.rows"
      @submit="handleSubmit"
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
      commentData: {
        total: 0,
        rows: [],
      },
      isLoading: true,
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
  },
  computed: {
    blogId() {
      return this.$route.params.articleId;
    },
  },
  created() {
    this.getCommentData();
  },
};
</script>

<style lang="less" scoped>
#blogComment-container {
  margin-top: 40px;
  h3 {
    margin-bottom: 30px;
  }
}
</style>
