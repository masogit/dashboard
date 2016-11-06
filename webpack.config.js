/** * Created by hammer on 2016/3/26. * 配置的打包文件 */
//import WebpackDevServer from 'webpack-dev-server';
var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
console.log(__dirname);

module.exports = {
  //插件项
  plugins: [
    //commonsPlugin,
    new webpack.NoErrorsPlugin()
  ],
  //页面入口文件配置
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/js/index.js')
  ],
  //入口文件输出配置
  //output: {path: __dirname+'_build_', filename: '[name].js'}
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    //加载器配置
    loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      //.js 文件使用 jsx-loader 来编译处理 jsx-loader可以添加?harmony参数使其支持ES6语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        } //备注：es2015用于支持ES6语法，react用于解决render()报错的问题
      },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      //{test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap&includePaths[]=' + path.resolve(__dirname, './node_modules') +
        '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, './node_modules/grommet/node_modules'))
      },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devServer: {
    inline: true,
    port: 9001,
    proxy: {
      '!**/index.js': 'http://localhost:9000'
    }
  }
};
