<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseLeave"
  >
    <div class="image-container" :style="positionNum" ref="inner">
      <ImageLoader
        :src="bigImg"
        :placeholder="midImg"
        @loaded="showWords($refs.title, titleWidth)"
      />
    </div>
    <h2 class="title" ref="title" @transitionend="showWords($refs.description, descriptionWidth)">
      {{ title }}
    </h2>
    <p class="words" ref="description">{{ description }}</p>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';
import { debounce } from '@/utils';
export default {
  components: {
    ImageLoader,
  },
  props: ['midImg', 'bigImg', 'title', 'description'],
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,
      containerSize: null, // 外层容器宽高，对象形式
      innerSize: null, // 里层图片宽高，对象形式
      mouserX: 0, // 鼠标位置
      mouserY: 0, // 鼠标位置
    };
  },
  computed: {
    positionNum() {
      if (!this.containerSize || !this.innerSize) return;
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      // console.log(extraWidth, extraHeight);
      const left = (-extraWidth / this.containerSize.width) * this.mouserX;
      const top = (-extraHeight / this.containerSize.height) * this.mouserY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    debounceFn() {
      return debounce(this.getSize, 500);
    },
    centerPos() {
      return {
        centerX: this.containerSize.width / 2,
        centerY: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    showWords(dom, domWidth) {
      dom.style.opacity = '1';
      dom.style.width = '0';
      dom.style.transition = 'width 1s';
      dom.clientWidth;
      dom.style.width = `${domWidth}px`;
    },
    getSize() {
      this.containerSize = {
        height: this.$refs.container.clientHeight,
        width: this.$refs.container.clientWidth,
      };
      this.innerSize = {
        height: this.$refs.inner.clientHeight,
        width: this.$refs.inner.clientWidth,
      };
      // console.log(this.containerSize);
      // console.log(this.innerSize);
    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouserX = e.clientX - rect.left;
      this.mouserY = e.clientY - rect.top;
      // console.log(this.mouserX, this.mouserY);
    },
    handleMouseLeave() {
      this.mouserX = this.centerPos.centerX;
      this.mouserY = this.centerPos.centerY;
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.getSize();
    // 一开始让鼠标位置居中
    this.mouserX = this.centerPos.centerX;
    this.mouserY = this.centerPos.centerY;
    // 监听视口变化，重新赋值
    window.addEventListener('resize', this.debounceFn);
  },
  destroyed() {
    window.removeEventListener('resize', this.debounceFn);
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .image-container {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 0.3s;
    // z-index: -3;
  }
  .title,
  .words {
    position: absolute;
    left: 30px;
    color: #fff;
    letter-spacing: 3px;
    // 文字描边
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5),
      0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .words {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>
