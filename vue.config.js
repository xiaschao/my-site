module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
      },
      '/static': {
        target: 'http://localhost:7001',
      },
    },
  },
  configureWebpack: require('./webpack.config'),
};
