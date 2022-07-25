<template>
  <div class="home-container" v-loading="isLoading">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      ref="carouselContainer"
      @wheel="handleWheel"
      @transitionend="isMoving = false"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem
          :midImg="item.midImg"
          :bigImg="item.bigImg"
          :title="item.title"
          :description="item.description"
        ></CarouselItem>
      </li>
    </ul>
    <div class="icon up-arrow" v-show="index > 0" @click="moveTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div class="icon down-arrow" v-show="index < banners.length - 1" @click="moveTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        @click="moveTo(i)"
        :class="{ active: index === i }"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import Icon from '@/components/Icon';
import { debounce } from '@/utils';
import { mapState } from 'vuex';
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      // banner: [],
      index: 0,
      containerHeight: 0,
      isMoving: false, // 是否正在移动
      // isLoading: true,
    };
  },
  methods: {
    moveTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(e.deltaY);
      if (this.isMoving) {
        // console.log('正在移动中');
        return;
      }
      if (e.deltaY > 10 && this.index < this.banners.length - 1) {
        this.isMoving = true;
        this.index += 1;
      } else if (e.deltaY < -10 && this.index > 0) {
        this.isMoving = true;
        this.index -= 1;
      }
    },
    handleResize() {
      this.containerHeight = this.$refs.carouselContainer.clientHeight;
      // console.log('change');
    },
    debounceHandleResize: debounce('handleResize', 500),
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + 'px';
    },
    ...mapState('banner', {
      banners: (state) => state.data,
      isLoading: (state) => state.loading,
    }),
  },
  created() {
    this.$store.dispatch('banner/fetchGetBanners');
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.debounceHandleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.debounceHandleResize);
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.home-container {
  height: 100%;
  position: relative;
  overflow: hidden;

  // 测试
  // height: 400px;
  // width: 600px;
  // overflow: visible;
  // margin: 40px auto;
  // border: 2px red solid;
  .carousel-container {
    height: 100%;
    margin-top: 0;
    // 这里有个bug， 将时间调大，在图片未加载时快速滑动滚轮
    transition: margin-top 500ms;
    li {
      height: 100%;
    }
  }
  .icon {
    @arrowY: 25px;
    @jumpY: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    &.up-arrow {
      top: @arrowY;
      animation: jumpUp 2s infinite;
    }
    &.down-arrow {
      bottom: @arrowY;
      animation: jumpDown 2s infinite;
    }

    @keyframes jumpUp {
      0% {
        transform: translateY(@jumpY);
      }
      50% {
        transform: translateY(-@jumpY);
      }
      100% {
        transform: translateY(@jumpY);
      }
    }
    @keyframes jumpDown {
      0% {
        transform: translateY(-@jumpY);
      }
      50% {
        transform: translateY(@jumpY);
      }
      100% {
        transform: translateY(-@jumpY);
      }
    }
  }
  .indicator {
    @size: 8px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    li {
      background-color: @words;
      border-radius: 50%;
      width: @size;
      height: @size;
      margin: 20px 0;
      cursor: pointer;
      border: 1px #fff solid;
      &.active {
        background-color: #fff;
        border-color: @words;
      }
    }
  }
}
</style>
