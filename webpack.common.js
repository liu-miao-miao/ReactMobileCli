const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[hash:4].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader!eslint-loader'
        }
      },
      {
        test:/\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          "url-loader"
        ]
      },
    ]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'production',
      template: './index.html',
      hash: true
    })
  ]
};