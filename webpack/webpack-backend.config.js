'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var serverPath = path.join(__dirname, '../server');
var nodeModulesPath = path.resolve(__dirname, '../node_modules');
var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: [
    path.join(nodeModulesPath, 'webpack/hot/signal.js'),
    path.join(serverPath, 'main.js')
  ],
  resolve: {
    root: serverPath,
    extensions: ['', '.js'],
    modulesDirectories: ['server']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.json$/, loader: 'file'}
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'backend.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true })
  ],
  target: 'node',
  externals: nodeModules,
  node: {
    __dirname: true,
    __filename: true
  }
};