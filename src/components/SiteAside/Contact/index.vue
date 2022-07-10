<template>
  <ul class="contact-container">
    <li class="contact-item" v-for="(item, index) in contactData" :key="index">
      <a :href="item.url" target="_blank">
        <Icon :type="item.iconType" />
        <span>{{ item.text }}</span>
      </a>
      <div class="qr-code" v-if="item.qrCode">
        <img :src="item.qrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
import qqercode from '@/assets/qqercode.png';
import weixincode from '@/assets/weixinercode.png';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      contactData: [
        { url: 'https://github.com/xiaschao/my-site', iconType: 'github', text: 'xiaschao' },
        { url: 'mailto:xiaschao@qq.com', iconType: 'mail', text: 'xiaschao@qq.com' },
        {
          url: 'tencent://message/?Menu=yes&uin=2383027986&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45',
          iconType: 'qq',
          text: '2383027986',
          qrCode: weixincode,
        },
        { url: 'javascript:;', iconType: 'weixin', text: 'xiaschao', qrCode: qqercode },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

@itemHeight: 30px;
.contact-container {
  color: @gray;
  font-size: 14px;
  .contact-item {
    height: @itemHeight;
    line-height: @itemHeight;
    padding-left: 10px;
    position: relative;
    a {
      &:hover + .qr-code {
        transform: scaleY(1);
      }
      .icon-container {
        font-size: 20px;
      }
      span {
        margin-left: 8px;
        vertical-align: 2px;
      }
    }
  }
  .qr-code {
    position: absolute;
    left: 15px;
    bottom: @itemHeight - 5px;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: 0.3s;
    img {
      width: 100px;
      height: 100px;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      border: 10px transparent solid;
      border-top-color: #fff;
      bottom: -10px;
      left: 40px;
    }
  }
}
</style>
