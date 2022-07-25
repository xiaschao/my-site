import Home from '@/views/Home';
import About from '@/views/About';
import Article from '@/views/Article';
import Message from '@/views/Message';
import Project from '@/views/Project';
import Detail from '@/views/Article/Detail.vue';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      title: '关于我',
    },
  },
  {
    name: 'Article',
    path: '/article',
    component: Article,
    meta: {
      title: '文章',
    },
  },
  {
    name: 'ArticleCategory',
    path: '/article/cate/:categoryId',
    component: Article,
  },
  {
    name: 'ArticleDetail',
    path: '/article/detail/:articleId',
    component: Detail,
    meta: {
      title: '文章',
    },
  },
  {
    name: 'Message',
    path: '/message',
    component: Message,
    meta: {
      title: '留言板',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: Project,
    meta: {
      title: '项目&效果',
    },
  },
];
