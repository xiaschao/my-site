<template>
  <div class="siteAside-container">
    <Avatar
      imgUrl="https://img2.baidu.com/it/u=1762118711,4071680279&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=48d74796a5c5bd5a55c571e777f98f7c"
    />
    <h2 class="title">千城墨白的个人空间</h2>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Contact from './Contact';
import Menu from './Menu';

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.siteAside-container {
  background-color: @dark;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 15px 0;
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin: 15px 0;
  }
  .avatar-container {
    margin: 0 auto;
  }
  .contact-container {
    margin-top: 50px;
  }
}
</style>
