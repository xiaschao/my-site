import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import '@/styles/global.less';
import './eventBus';

import '@/mock';

Vue.config.productionTip = false;

import { showMessage } from '@/utils';

Vue.prototype.$showMessage = showMessage;

import vLoading from '@/directive/loading.js';
import vLazy from '@/directive/lazy.js';
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

// 一开始加载全局设置
store.dispatch('setting/fetchSetting');

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
