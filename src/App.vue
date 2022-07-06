<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <div class="main">
        <router-view></router-view>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
import '@/styles/global.less';
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.app-container {
  .self-fill(fixed);
  .aside {
    height: 100%;
    width: 225px;
  }
}
</style>
