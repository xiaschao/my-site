<template>
  <div class="message-container" ref="mainContainer">
    <MessageArea
      title="评论列表"
      :subTitle="`(${messageData.total})`"
      :list="messageData.rows"
      @submit="handleSubmit"
      :isListLoading="isLoading"
      :hasMore="isFirstLoad || isHasMore"
    ></MessageArea>
  </div>
</template>

<script>
import { getMessages, postMessage } from '@/api/message.js';
import MessageArea from '@/components/MessageArea';
import mainScroll from '@/mixins/mainScroll.js';

export default {
  mixins: [mainScroll()],
  components: {
    MessageArea,
  },
  data() {
    return {
      isLoading: true,
      messageData: {
        total: 0,
        rows: [],
      },
      page: 1,
      limit: 10,
      isFirstLoad: true, // 是否时第一次加载，这时不要显示没有更多了
    };
  },
  methods: {
    async getData() {
      this.messageData = await getMessages(this.page, this.limit);
      this.isLoading = false;
      // console.log(this.messageData);
    },
    async handleSubmit(data, callback) {
      const resp = await postMessage({
        ...data,
      });
      this.messageData.rows.unshift(resp);
      this.messageData.total++;
      callback('感谢您的留言');
    },
    async loadMore() {
      if (!this.isHasMore) return;
      this.isLoading = true;
      this.page++;
      const data = await getMessages(this.page, this.limit);
      this.total = data.total;
      this.messageData.rows = this.messageData.rows.concat(data.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) return;
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) this.loadMore();
    },
  },
  computed: {
    isHasMore() {
      return this.messageData.rows.length < this.messageData.total;
    },
  },
  async created() {
    await this.getData();
    this.isFirstLoad = false;
    this.$bus.$on('mainScroll', this.handleScroll);
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.message-container {
  height: 100%;
  overflow-y: auto;
  padding: 40px 0;
  scroll-behavior: smooth;
  .messageArea-container {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
