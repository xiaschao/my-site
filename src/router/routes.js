import Home from '@/views/Home';
import About from '@/views/About';
import Article from '@/views/Article';
import Message from '@/views/Message';
import Project from '@/views/Project';
import Detail from '@/views/Article/Detail.vue';

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Article', path: '/article', component: Article },
  { name: 'ArticleCategory', path: '/article/cate/:categoryId', component: Article },
  { name: 'ArticleDetail', path: '/article/detail/:articleId', component: Detail },
  { name: 'Message', path: '/message', component: Message },
  { name: 'Project', path: '/project', component: Project },
];
