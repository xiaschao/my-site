import Vuex from 'vuex';
import Vue from 'vue';
import banner from './banner';
import setting from './setting';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    banner,
    setting,
  },
  strict: true,
});

export default store;
