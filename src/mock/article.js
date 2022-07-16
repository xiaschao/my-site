import mockjs from 'mockjs';
import qs from 'querystring';

mockjs.mock('/api/blogtype', 'get', {
  code: 0,
  msg: '',
  'data|10-20': [
    {
      'id+': 1,
      name: '分类@id',
      'articleCount|10-300': 0, // 该分类下文章的数量
      'order|200-300': 0,
    },
  ],
});

mockjs.mock(/^\/api\/blog(\?.+)?$/, 'get', (options) => {
  const query = qs.parse(options.url);
  // console.log(query);
  return mockjs.mock({
    code: 0,
    msg: '',
    data: {
      'total|2000-3000': 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: '@guid',
          title: '@ctitle(1, 50)',
          description: '@cparagraph(1, 10)',
          category: {
            'id|1-10': 0,
            name: '分类@id',
          },
          'scanNumber|0-3000': 0,
          'commentNumber|0-300': 30,
          'thumb|1': [mockjs.Random.image('300x250', '#000', '#fff', 'Random Image'), null],
          createDate: `@date('T')`,
        },
      ],
    },
  });
});
