<template>
  <ul class="project-container" v-loading="isLoading" ref="mainContainer">
    <li class="project-list" v-for="(item, i) in projectData" :key="item.id" ref="projectList">
      <a class="img-cover" @click.prevent="handleHref(item.url, i)">
        <img v-lazy="item.thumb" />
      </a>
      <div class="left">
        <div class="header">
          <h2 class="title">
            <a @click.prevent="handleHref(item.url, i)">{{ item.name }}</a>
          </h2>
          <div class="href">
            <a :href="item.github" target="_blank">github地址</a>
            <a :href="item.url" v-if="item.url">项目效果</a>
          </div>
        </div>
        <ul class="description">
          <li class="description-list" v-for="(words, i) in item.description" :key="i">
            {{ words }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { getProjects } from '@/api/project.js';
import mainScroll from '@/mixins/mainScroll.js';
export default {
  mixins: [mainScroll()],
  data() {
    return {
      projectData: [],
      isLoading: true,
    };
  },
  methods: {
    async getData() {
      const resp = await getProjects();
      this.isLoading = false;
      this.projectData = resp;
      // console.log(this.projectData);
    },
    handleHref(path, index) {
      if (path) {
        window.open(path, '_blank');
      } else {
        this.$showMessage({
          content: '该项目效果仅可在内网显示',
          container: this.$refs.projectList[index],
          type: 'warn',
        });
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.project-container {
  height: 100%;
  // background-color: antiquewhite;
  overflow-y: auto;
  padding: 10px 30px;
  scroll-behavior: smooth;
  a {
    cursor: pointer;
  }
  .project-list {
    margin: 20px 0;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
    height: 250px;
    overflow: hidden;
    padding: 20px;
    display: flex;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .img-cover {
      display: block;
      margin-right: 20px;
      img {
        width: 250px;
        height: 210px;
        object-fit: cover;
      }
    }
    .left {
      flex: 1;
      .header {
        display: flex;
        justify-content: space-between;

        .href {
          a {
            display: block;
            text-align: right;
            color: @primary;
            &:first-child {
              margin-bottom: 5px;
            }
          }
        }
      }
      .description {
        margin-top: 15x;
        .description-list {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
