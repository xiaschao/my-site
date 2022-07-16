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
