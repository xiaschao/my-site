<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: 'iconzhuye',
  success: 'iconzhengque',
  error: 'iconcuowu',
  close: 'iconguanbi',
  warn: 'iconjinggao',
  info: 'iconxinxi',
  blog: 'iconblog',
  code: 'iconcode',
  about: 'iconset_about_hov',
  weixin: 'iconweixin',
  mail: 'iconemail',
  github: 'icongithub',
  qq: 'iconsign_qq',
  arrowUp: 'iconiconfonticonfonti2copy',
  arrowDown: 'iconiconfonticonfonti2',
  empty: 'iconempty',
  chat: 'iconliuyan',
};
export const keys = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_2164449_nalfgtq7il.css');
</style>
