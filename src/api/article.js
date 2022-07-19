import request from './request';

export async function getBlogType() {
  return await request.get('/api/blogtype');
}

export async function getBlog(page = 1, limit = 10, categoryid = -1) {
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

export async function getSingleBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/* commentInfo {
	nickname: "昵称",
	content: "评论内容，纯文本",
	blogId: <id>	#评论的博客id
} */
export async function postComments(commentInfo) {
  return await request.post('/api/comment', commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get('/api/comment', {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
