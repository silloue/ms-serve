// 这是公用模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const VueLoaderPlugin = require('vue-loader-v16/dist/plugin.js').default
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
  entry: { 
    app: './src/main.js'
  },
  module: { 
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.vue$/,
      use: ['vue-loader-v16']
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [{ 
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'assets/img',
          publicPath: ''
        }
      }]
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }],
      include: [
          path.resolve(__dirname, 'src')
      ]
    }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
    }]
  },
  plugins: [ // 插件配置
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name:"main",
      filename:"ccc.js",
      remotes: {
        ms1:'ms1@http://localhost:8001/ccc.js'
      },
    })
  ],
  output: { // webpack 出口配置
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.cjs.prod.js',
      '@': path.resolve('src')
    }
  }
}