import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
import '@/mock';
import '@/api/banner.js';

Vue.config.productionTip = false;

import { showMessage } from '@/utils';

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
