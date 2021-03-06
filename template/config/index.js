// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    //index: path.resolve(__dirname, '../dist/index.html'),
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,//打包 & 生成 map
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    assetsRoot:path.resolve(__dirname, '../src'),
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
