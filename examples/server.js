const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

// 创建express 服务
const app = express()
const compiler = webpack(WebpackConfig)

// 挂载webpack-dev-middleware中间件
// 提供webpack编译打包后的产品文件服务
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

// 挂载热重载中间件
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

// 定义端口
const port = process.env.PORT || 8084;
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
