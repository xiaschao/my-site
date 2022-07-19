<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <div class="content">
      <HierarchicalList :list="TOCData" @select="handleSelect" />
    </div>
  </div>
</template>

<script>
import HierarchicalList from './HierarchicalList.vue';
export default {
  components: {
    HierarchicalList,
  },
  props: {
    TOCData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(item) {
      // console.log(item);
      location.hash = item.anchor;
    },
  },
};
</script>

<style lang="less" scoped>
.blogTOC-container {
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.3em;
    margin-bottom: 20px;
  }
}
</style>
