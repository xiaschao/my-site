const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.NODE_ENV === 'production') {
  // 如果在打包阶段才触发此插件
  module.exports = {
    plugins: [new BundleAnalyzerPlugin()],
    devtool: 'none', // 不生成 .map文件
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios',
    },
  };
} else {
  module.exports = {};
}
