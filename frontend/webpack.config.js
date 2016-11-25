var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './entry.js',
    './index.htm'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!promise-polyfill',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
