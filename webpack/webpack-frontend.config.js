'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var appPath = path.join(__dirname, '../app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var config = require(path.join(appPath, './config/config'));

if (!config) {
  console.warn('config/config.json is missing. Please read config/README.md for further instruction.');
}

if (config && !config.apiKey) {
  console.warn('The apiKey is not configured. Please read config/README.md for further instruction.');
}

module.exports = {
  entry: {
    module: path.join(appPath, 'app.js'),
    common: ['react', 'react-router', 'material-ui', 'alt']
  },
  resolve: {
    root: appPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['app', 'node_modules']
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
      {test: /\.(js|jsx)$/, exclude: [nodeModulesPath], loader: 'babel?cacheDirectory'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  customParams: {
    apiKey: config.apiKey
  }
};