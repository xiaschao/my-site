import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { setFullTitle } from '@/utils';

if (!window.VueRouter) {
  Vue.use(VueRouter);
}

const router = new VueRouter({
  routes, //路由匹配规则
  mode: 'history',
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    setFullTitle.setRouterTitle(to.meta.title);
  }
});

export default router;
