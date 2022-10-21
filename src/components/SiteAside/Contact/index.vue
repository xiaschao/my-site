<template>
  <ul class="contact-container">
    <li class="contact-item" v-for="(item, index) in contactData" :key="index">
      <a :href="item.url" target="_blank" rel="noopener noreferrer" v-if="item.url" class="content">
        <Icon :type="item.iconType" />
        <span class="text">{{ item.text }}</span>
      </a>
      <span v-else class="content">
        <span class="icon-weixin">
          <Icon :type="item.iconType" />
        </span>
        <span class="text">{{ item.text }}</span>
      </span>
      <div class="qr-code" v-if="item.qrCode">
        <img :src="item.qrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
import { mapState } from 'vuex';
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState('setting', ['data']),
    contactData() {
      const vuexData = this.data;
      return [
        { url: vuexData.github, iconType: 'github', text: vuexData.githubName },
        { url: 'mailto:' + vuexData.mail, iconType: 'mail', text: vuexData.mail },
        {
          url: `tencent://message/?Menu=yes&uin=${vuexData.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`,
          iconType: 'qq',
          text: vuexData.qq,
          qrCode: vuexData.qqQrCode,
        },
        {
          url: '',
          iconType: 'weixin',
          text: vuexData.weixin,
          qrCode: vuexData.weixinQrCode,
        },
      ];
    },
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
    .content {
      &:hover + .qr-code {
        transform: scaleY(1);
      }
      .icon-container {
        font-size: 20px;
      }
      .text {
        margin-left: 8px;
        vertical-align: 2px;
      }
      .icon-weixin {
        .icon-container {
          font-size: 23px;
        }
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
