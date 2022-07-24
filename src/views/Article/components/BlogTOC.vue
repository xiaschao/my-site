<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <div class="content">
      <HierarchicalList :list="TOCDataWithSelect" @select="handleSelect" />
    </div>
  </div>
</template>

<script>
import HierarchicalList from './HierarchicalList.vue';
import { debounce } from '@/utils';
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
    return {
      activeAnchor: '',
    };
  },
  methods: {
    handleSelect(item) {
      // console.log(item);
      location.hash = item.anchor;
    },
    setActiveAnchor() {
      // console.log('执行了');
      this.activeAnchor = '';
      const range = 200;
      for (const item of this.titleDoms) {
        if (!item) continue;
        const top = item.getBoundingClientRect().top;
        if (top > 0 && top <= range) {
          this.activeAnchor = item.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = item.id;
        }
      }
    },
    setActiveAnchorDebounce: debounce('setActiveAnchor', 100),
  },
  computed: {
    TOCDataWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelected: item.anchor === this.activeAnchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.TOCData);
    },
    // 标题dom数组
    titleDoms() {
      const arr = [];
      const addToDoms = (toc) => {
        for (const item of toc) {
          arr.push(document.querySelector('#' + item.anchor));
          // console.log(item.anchor);
          if (item.children && item.children.length > 0) {
            addToDoms(item.children);
          }
        }
      };
      addToDoms(this.TOCData);
      // console.log(arr);
      return arr;
    },
  },
  created() {
    this.$bus.$on('mainScroll', this.setActiveAnchorDebounce);
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.setActiveAnchorDebounce);
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
