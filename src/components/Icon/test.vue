<template>
  <ul class="test-container">
    <li class="icon-item" v-for="(t, i) in keys" :key="i">
      {{ t }}
      <Icon :type="t" />
    </li>
  </ul>
</template>

<script>
import Icon, { keys } from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      keys,
    };
  },
};
</script>

<style></style>
