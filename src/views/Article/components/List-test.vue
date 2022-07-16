<template>
  <div class="test-container">
    <HierarchicalList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import HierarchicalList from './HierarchicalList.vue';
export default {
  components: {
    HierarchicalList,
  },
  data() {
    return {
      list: [
        {
          name: '第一项',
          isSelected: false,
          children: [
            {
              name: '1',
              isSelected: true,
            },
          ],
        },
        {
          name: '第二项',
          isSelected: false,
        },
        {
          name: '第三项',
          isSelected: false,
        },
        {
          name: '第四项',
          isSelected: false,
        },
        {
          name: '第五项',
          isSelected: false,
        },
        {
          name: '第六项',
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    handleSelect(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 800px;
  margin: 20px auto;
  border: 1px red solid;
}
</style>
