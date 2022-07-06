<template>
  <div class="imageLoader-conatiner">
    <img :src="placeholder" alt="" id="placeholder-image" v-if="!this.everyDone" />
    <img
      @load="loadImage"
      :src="src"
      alt=""
      id="original-image"
      :style="{ opacity: originalLoaded ? 1 : 0, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originalLoaded: false, //原图是否加载完成
      everyDone: false,
    };
  },
  methods: {
    loadImage() {
      this.originalLoaded = true;
      // console.log('原图加载完成');
      setTimeout(() => {
        this.everyDone = true;
        this.$emit('loaded');
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.imageLoader-conatiner {
  height: 100%;
  position: relative;
  user-select: none;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill();
  }
  #placeholder-image {
    filter: blur(2vw);
  }
}
</style>
