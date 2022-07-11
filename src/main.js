import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
import '@/styles/global.less';

import '@/mock';

Vue.config.productionTip = false;

import { showMessage } from '@/utils';

Vue.prototype.$showMessage = showMessage;

import vLoading from '@/directive/loading.js';
Vue.directive('loading', vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
