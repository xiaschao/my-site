import Mock from 'mockjs';
import weixincode from '@/assets/qqercode.png';
import qqercode from '@/assets/weixinercode.png';

Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar:
      'https://img2.baidu.com/it/u=1762118711,4071680279&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=48d74796a5c5bd5a55c571e777f98f7c',
    siteTitle: '我的个人空间',
    github: 'https://github.com/xiaschao/my-site',
    qq: '2383027986',
    qqQrCode: weixincode,
    weixin: 'xiaschao',
    weixinQrCode: qqercode,
    mail: 'mailto:xiaschao@qq.com',
    icp: '黑ICP备17001719号',
    githubName: 'xiaschao',
    favicon: 'http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f',
  },
});
