<template>
  <div class="messageArea-container">
    <CommmentForm v-on="$listeners" />
    <h4 class="title">
      {{ title }}
      <span>{{ subTitle }}</span>
    </h4>
    <CommentList :list="list" />
  </div>
</template>

<script>
import CommmentForm from './components/CommmentForm.vue';
import CommentList from './components/CommentList.vue';
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
  },
};
</script>

<style lang="less" scoped></style>
