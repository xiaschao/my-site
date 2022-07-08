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
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.app-container {
  .aside {
    height: 100vh;
    width: 225px;
  }
  .main {
    height: 100vh;
    overflow: auto;
  }
}
</style>
