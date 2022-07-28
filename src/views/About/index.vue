<template>
  <div class="about-container" v-loading="isLoading">
    <div class="ifram-container" v-if="aboutUrl" v-loading="!srcLoaded">
      <iframe :src="aboutUrl" frameborder="0" class="content" @load="srcLoaded = true"></iframe>
    </div>
    <Empty v-else-if="!aboutUrl && !isLoading" text="正在加紧制作中..." />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Empty from '@/components/Empty';
export default {
  components: {
    Empty,
  },
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: {
    ...mapState('about', {
      aboutUrl: 'data',
      isLoading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('about/fetchGetAbout');
  },
};
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.ifram-container {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: block;
}
</style>
