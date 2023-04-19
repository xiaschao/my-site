import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "@/views/NotFound.vue";

// nprogress配置
configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function handleAsyncCompoent(fn) {
  return async () => {
    // console.log('组件开始加载');
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(800);
    }
    const comp = await fn();
    // console.log('组件加载结束');
    done();
    return comp; // 返回该异步组件
  };
}

export default [
  { path: "/index", redirect: { name: "Home" } },
  {
    name: "Home",
    path: "/",
    component: handleAsyncCompoent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "About" */ "@/views/About/temp.vue")
    ),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Article",
    path: "/article",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "Article" */ "@/views/Article")
    ),
    meta: {
      title: "文章",
    },
  },
  {
    name: "ArticleCategory",
    path: "/article/cate/:categoryId",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "ArticleCategory" */ "@/views/Article")
    ),
  },
  {
    name: "ArticleDetail",
    path: "/article/detail/:articleId",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "ArticleDetail" */ "@/views/Article/Detail")
    ),
    meta: {
      title: "文章",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "Message" */ "@/views/Message")
    ),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: handleAsyncCompoent(() =>
      import(/* webpackChunkName: "Project" */ "@/views/Project")
    ),
    meta: {
      title: "项目&效果",
    },
  },
  { name: "NotFound", path: "*", component: NotFound },
];
