<template>
  <div>
    <h1>vue根组件</h1>
    <Pager :current="current" :total="302" @pageChange="handlePageChange($event)" />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      // console.log(newPage);
      this.current = newPage;
    },
  },
};
</script>
