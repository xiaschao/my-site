<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from './';
import '@/styles/global.less';
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped lang="less">
.siteAside-container {
  width: 200px;
  height: 600px;
}
</style>
