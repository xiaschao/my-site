export default function (refName = 'mainContainer') {
  return {
    mounted() {
      this.$refs[refName].addEventListener('scroll', this.handleMainScroll);
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);
      // console.log(this.$refs);
    },
    methods: {
      handleMainScroll() {
        // console.log('变化了');
        // 发送一个事件到事件总线
        this.$bus.$emit('mainScroll', this.$refs[refName]);
      },
      handleSetMainScroll(top) {
        this.$refs[refName].scrollTop = top;
      },
    },
    beforeDestroy() {
      this.$refs[refName].removeEventListener('scroll', this.handleMainScroll);
      this.$bus.$emit('mainScroll');
      this.$bus.$off('setMainScroll', this.handleSetMainScroll);
    },
  };
}
