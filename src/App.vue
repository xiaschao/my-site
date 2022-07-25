<template>
  <div class="app-container" v-if="data">
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
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
import ToTop from '@/components/ToTop';
import { mapState } from 'vuex';
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  computed: mapState('setting', ['data']),
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
