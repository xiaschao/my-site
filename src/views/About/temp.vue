<template>
  <div class="container">
    <div class="header">
      <!-- 介绍 -->
      <div class="header-introduce">
        <div class="header-introduce-name">
          <h1>某泽</h1>
          <span>gou叫大师</span>
        </div>
        <div class="header-introduce-item">
          <i class="iconfont icondianhua"></i>
          <a href="tel:15195705083">151 9570 0000</a>
          <label>学历</label>
          <span>博士僧</span>
          <i class="iconfont iconyoujian"></i>
          <a href="mailto:1742111111@qq.com">1742111111@qq.com</a>
          <label>生日</label>
          <span>1998-02-02</span>
          <i class="iconfont iconwangzhan"></i>
          <a href="www.xiaowang.com">www.xiaowang.com</a>
          <label>开发经验</label>
          <span>5年</span>
        </div>
      </div>
      <!-- 头像 -->
      <div class="header-avatar">
        <img src="@/assets/hsq.jpg" alt="" />
      </div>
    </div>

    <div class="experience">
      <h3>教育经历</h3>
      <div class="experience-content">
        <p class="experience-content-title">
          <span>2005 ~ 2009</span>
          <span>xxxxxxxxx</span>
          <span>云计算技术与应用</span>
        </p>

        <p class="experience-content-title">
          <span>2005 ~ 2009</span>
          <span>xxxxxxxxxx</span>
          <span>云计算技术与应用</span>
        </p>
      </div>
    </div>

    <div class="experience">
      <h3>工作经历</h3>
      <div class="experience-content">
        <p class="experience-content-title">
          <span>2005 ~ 2009</span>
          <span>xxxxxxxxxx</span>
          <span>云计算技术与应用</span>
        </p>
        <p>
          负责对挖掘机的各种零部件进行检测、维修。对生产线的各个环节进行把控，及时发现风险。负责产品质量状态标识工作，严格控制不良品。也会对进口挖掘机的品质进行把控，制定符合公司战略需要的质检标准。
        </p>
        <p class="experience-content-title">
          <span>2005 ~ 2009</span>
          <span>xxxxxxxxxx</span>
          <span>云计算技术与应用</span>
        </p>
        <p>
          负责对挖掘机的各种零部件进行检测、维修。对生产线的各个环节进行把控，及时发现风险。负责产品质量状态标识工作，严格控制不良品。也会对进口挖掘机的品质进行把控，制定符合公司战略需要的质检标准。
        </p>
      </div>
    </div>

    <div class="skill">
      <h3>专业技能</h3>
      <ul class="charts">
        <li><span>技能1</span></li>
        <li><span>技能2</span></li>
        <li><span>技能3</span></li>
        <li><span>技能4</span></li>
        <li><span>技能5</span></li>
        <li><span>技能6</span></li>
      </ul>
    </div>

    <div class="project">
      <h3>项目经验</h3>
      <div class="pro-item">
        <h4>在线时间管理系统</h4>
        <div class="pro-main">
          <span class="pro-item-title">访问地址</span>
          <a href="www.todolist.com">www.todolist.com</a>

          <span class="pro-item-title">github</span>
          <a href="www.github.com">www.github.com</a>

          <span class="pro-item-title">项目背景</span>
          <span>本系统在学习 vue 后，凭个人兴趣，开发的用于进行时间管理的系统</span>

          <span class="pro-item-title">项目实现</span>
          <div class="pro-item-content">
            <p>
              系统包含
              <strong>任务清单</strong>
              、
              <strong>任务分类</strong>
              、
              <strong>日志薄</strong>
              、
              <strong>废纸篓</strong>
              等模块，本人参与了所有模块的开发。
            </p>
            <p>
              系统分为前后端两个部分。前端部分使用
              <strong>vue</strong>
              作为框架，并使用脚手架
              <strong>vue-cli</strong>
              搭建。
            </p>
            <p>
              其中，使用
              <strong>vue-router</strong>
              处理路由，使用
              <strong>vuex</strong>
              处理共享数据，使用
              <strong>element-ui</strong>
              构建界面。
            </p>
            <p>
              后端部分使用
              <strong>node</strong>
              搭建轻量级服务器，通过
              <strong>express</strong>
              为前端提供REST风格的接口，数据方面利用
              <strong>mysql</strong>
              持久化数据，并利用库
              <strong>sequelize</strong>
              提供的接口操作数据库
            </p>
            <p>
              项目开发中遇到了
              <strong>打包体积过大</strong>
              的问题，经过研究，最终利用
              <strong>tree shaking</strong>、<strong>dynamic import</strong>、
              <strong>gzip</strong>
              ，很好的解决了该问题
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="project">
      <h3>项目经验</h3>
      <div class="pro-item">
        <h4>在线时间管理系统</h4>
        <div class="pro-main">
          <span class="pro-item-title">访问地址</span>
          <a href="www.todolist.com">www.todolist.com</a>

          <span class="pro-item-title">github</span>
          <a href="www.github.com">www.github.com</a>

          <span class="pro-item-title">项目背景</span>
          <span>本系统在学习 vue 后，凭个人兴趣，开发的用于进行时间管理的系统</span>

          <span class="pro-item-title">项目实现</span>
          <div class="pro-item-content">
            <p>
              系统包含
              <strong>任务清单</strong>
              、
              <strong>任务分类</strong>
              、
              <strong>日志薄</strong>
              、
              <strong>废纸篓</strong>
              等模块，本人参与了所有模块的开发。
            </p>
            <p>
              系统分为前后端两个部分。前端部分使用
              <strong>vue</strong>
              作为框架，并使用脚手架
              <strong>vue-cli</strong>
              搭建。
            </p>
            <p>
              其中，使用
              <strong>vue-router</strong>
              处理路由，使用
              <strong>vuex</strong>
              处理共享数据，使用
              <strong>element-ui</strong>
              构建界面。
            </p>
            <p>
              后端部分使用
              <strong>node</strong>
              搭建轻量级服务器，通过
              <strong>express</strong>
              为前端提供REST风格的接口，数据方面利用
              <strong>mysql</strong>
              持久化数据，并利用库
              <strong>sequelize</strong>
              提供的接口操作数据库
            </p>
            <p>
              项目开发中遇到了
              <strong>打包体积过大</strong>
              的问题，经过研究，最终利用
              <strong>tree shaking</strong>、<strong>dynamic import</strong>、
              <strong>gzip</strong>
              ，很好的解决了该问题
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 个人评价 -->
    <div class="evaluation">
      <h3>个人评价</h3>
      <p>
        对用户运营有一定经验，半年内成功扩展300+用户，主持举办了交流访谈活动，善于沟通，成功转化60w+用户成为忠实用户
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 50px auto;
  padding: 50px;
  color: #333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: relative;
  background-color: #fff;
  line-height: 1.5;
}

.container::after {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #22d3ee, #0ea5e9);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  z-index: -1;
  border-radius: 20px;
  transform: rotate(-3deg);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
li {
  list-style-type: none;
}

/* 头部区域 */
.container .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.container .header .header-avatar img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}
.container .header .header-introduce .header-introduce-name {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  letter-spacing: 3px;
}
.header-introduce-name span {
  font-size: 14px;
  margin-left: 20px;
}
.header-introduce .header-introduce-item {
  display: grid;
  grid-template-columns: 30px 260px 100px 150px;
  grid-template-rows: repeat(3, 30px);
  align-items: center;
  font-size: 14px;
}

.header-introduce .header-introduce-item a {
  color: #0ea5e9;
}

.header-introduce .header-introduce-item .iconfont,
.header-introduce .header-introduce-item label {
  color: #a5aaad;
  font-weight: normal;
  margin-right: 10px;
}
.header-introduce .header-introduce-item label {
  text-align: right;
}

/* 经历 */
.experience {
  margin-bottom: 20px;
}
h3 {
  border-bottom: 1px solid #a5aaad;
  height: 50px;
  line-height: 50px;
}
.experience .experience-content {
  position: relative;
  color: #a5aaad;
  font-size: 14px;
  margin-left: 20px;
  padding-top: 40px;
  padding-bottom: 10px;
}
.experience .experience-content::after {
  content: "";
  width: 2px;
  height: 100%;
  position: absolute;
  background-color: #0ea5e9;
  top: 10px;
  left: -20px;
}
.experience .experience-content .experience-content-title {
  display: flex;
  position: relative;
}
.experience .experience-content .experience-content-title + p {
  margin: 15px 0 25px 0;
}
.experience .experience-content .experience-content-title :nth-child(2) {
  margin: 0 10px;
  color: #333;
}
.experience .experience-content .experience-content-title::before {
  content: "";
  width: 15px;
  height: 15px;
  background-color: #0ea5e9;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: -27px;
}
/* 专业技能 */

.skill .charts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 350px;
  align-items: center;
  justify-items: center;
  margin: 20px 0;
}

.skill .charts li {
  border: 5px #c3f1f8 solid;
  background-color: #f0fdff;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill .charts li:nth-child(1) {
  border-top-color: #0ea5e9;
  transform: rotate(45deg);
}

.skill .charts :nth-child(2) {
  border-right-color: #0ea5e9;
  border-top-color: #0ea5e9;
  transform: rotate(45deg);
}

.skill .charts :nth-child(3) {
  border-color: #0ea5e9 #0ea5e9 #0ea5e9 #c3f1f8;
  transform: rotate(45deg);
}
.skill .charts :nth-child(4) {
  border-color: #0ea5e9;
}
.skill .charts :nth-child(5) {
  border-right-color: #0ea5e9;
  border-top-color: #0ea5e9;
  transform: rotate(45deg);
}
.skill .charts :nth-child(6) {
  border-color: #0ea5e9;
}
.skill .charts li:nth-child(1) span,
.skill .charts :nth-child(2) span,
.skill .charts :nth-child(3) span,
.skill .charts :nth-child(5) span {
  transform: rotate(-45deg);
}

/* 项目经验 */
.pro-item h4 {
  margin: 30px 0 20px 0;
}
.pro-item .pro-main {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 30px 30px 30px 1fr;
  font-size: 14px;
  column-gap: 10px;
}
.pro-item .pro-main .pro-item-title {
  color: #a5aaad;
  text-align: right;
}
.pro-item .pro-main a {
  color: #0ea5e9;
}
.pro-item .pro-main .pro-item-content p {
  margin-bottom: 10px;
}

.evaluation p {
  line-height: 30px;
  margin-top: 20px;
}
</style>
