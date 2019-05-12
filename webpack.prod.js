const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules:[
      {
        test:/\.scss$/,
        use:[
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(
      {
      parallel: true
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: "[name].css",
        chunkFilename: "[id].css"
      }
    )
  ]
});