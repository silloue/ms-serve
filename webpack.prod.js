// 生产环境配置
const merge = require('webpack-merge') 
const common = require('./webpack.common.js') // 引入公共模块配置
const webpack = require('webpack') // 引入webpack


module.exports = merge.merge(common, {
  devtool: 'inline-source-map', 
  mode: 'production',
})