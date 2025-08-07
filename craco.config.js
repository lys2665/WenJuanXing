module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true, // 避免跨域
      },
    },
  },
};