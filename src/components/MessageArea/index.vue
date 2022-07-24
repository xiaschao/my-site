<template>
  <div class="messageArea-container">
    <CommmentForm v-on="$listeners" />
    <h4 class="title">
      {{ title }}
      <span>{{ subTitle }}</span>
    </h4>
    <CommentList :list="list" />
    <div class="loading" v-loading="isListLoading">{{ hasMore ? '' : '没有更多了' }}</div>
  </div>
</template>

<script>
import CommmentForm from './components/DataForm.vue';
import CommentList from './components/DataList.vue';
export default {
  components: {
    CommmentForm,
    CommentList,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    hasMore: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
  text-align: center;
  width: 100%;
  line-height: 100px;
}
</style>
