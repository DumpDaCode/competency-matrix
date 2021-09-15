
module.exports = {

  devServer: {
    proxy: {
      '/server': {
        target: 'http://cs.mkcl.org/1tnTkU5kI7a4Kun9JlxkhUc1TDO', // provide proxy  for your project
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/server': ''
        }
      },
    }
  },
  productionSourceMap: false
}
