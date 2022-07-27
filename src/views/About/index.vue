<template>
  <div class="about-container" v-loading="isLoading || !srcLoaded">
    <iframe :src="aboutUrl" frameborder="0" class="content" @load="srcLoaded = true"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
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
.content {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: block;
}
</style>
