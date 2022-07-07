module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://study.duyiedu.com',
      },
    },
  },
};
