<template>
  <div class="siteAside-container">
    <Avatar :imgUrl="data.avatar" />
    <h2 class="title">{{ data.siteTitle }}</h2>
    <Menu />
    <Contact />
    <!-- 备案号 -->
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
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
  .footer {
    margin-top: 40px;
    color: @lightWords;
    text-align: center;
    font-size: 16px;
  }
}
</style>
