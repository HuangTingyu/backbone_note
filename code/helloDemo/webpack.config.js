var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var webpack = require('webpack')


module.exports = {
  mode:'development',
  devtool:'eval-cheap-module-source-map',
  entry: {
    main:'./src/index.js',
  },
  devServer:{
    contentBase:'./dist',
    open:true,
    hot:true,
    hotOnly:true
  },
  module: {
    rules: [{
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'url-loader',
            // placeholder占位符
            options: {
                name: '[name]_[hash].[ext]',
                outputPath: 'images/',
                limit: 20480
            }
        }
    },{
        test:/\.scss$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',options:{
              importLoaders:2,
              modules:true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
    },{
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
    },{
      test:/\.art$/,
      use: {
        loader:'art-template-loader'
      }
    }
  ]
},
  output: {
    publicPath:'/',
    filename:'[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({template:'./src/index.html'}),
    new webpack.ProvidePlugin({
      $:'jquery',
      _:'lodash'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}