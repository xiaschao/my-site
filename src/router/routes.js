import Home from '@/views/Home';
import About from '@/views/About';
import Article from '@/views/Article';
import Message from '@/views/Message';
import Project from '@/views/Project';

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Article', path: '/article', component: Article },
  { name: 'ArticleCategory', path: '/article/:categoryId', component: Article },
  { name: 'Message', path: '/message', component: Message },
  { name: 'Project', path: '/project', component: Project },
];
