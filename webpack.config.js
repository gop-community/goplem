'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var appPath = path.join(__dirname, 'app');
var config = require('./config/config');

if (!config) {
  console.warn('config/config.json is missing. Please read config/README.md for further instruction.');
}

if (config && !config.apiKey) {
  console.warn('The apiKey is not configured. Please read config/README.md for further instruction.');
}

module.exports = {
  entry: {
    module: path.join(appPath, 'app.js'),
    common: ['react', 'react-router', 'alt']
  },
  resolve: {
    root: appPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'app']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(appPath, 'assets/index.html'),
      filename: 'index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'}
    ]
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  },
  customParams: {
    apiKey: config.apiKey
  }
};