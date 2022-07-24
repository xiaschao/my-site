import Vue from 'vue';

const app = new Vue({});
// 导出一个Vue实例，自带$on,$off,$emit...
// export default new Vue({});
Vue.prototype.$bus = app;
export default app;
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 *
 * 事件名：setMainScroll
 * 含义：设置主区域滚动条为参数
 * 参数：
 * - 回到的值
 */
