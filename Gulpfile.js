var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('nodemon');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackFrontendConfiguration = require('./webpack/webpack-frontend.config.js');
var webpackBackendConfiguration = require('./webpack/webpack-backend.config.js');

gulp.task('default', ['build']);

gulp.task('build', ['webpack:build-frontend']);

gulp.task('webpack:build-frontend', function(callback) {
  var myConfig = Object.create(webpackFrontendConfiguration);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build-frontend', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('frontend-dev-server', function() {
  var myConfig = Object.create(webpackFrontendConfiguration);
  myConfig.debug = true;

  new WebpackDevServer(webpack(myConfig), {
    contentBase: './tmp',
    historyApiFallback: true,
    stats: {
      colors: true
    },
    proxy: {
      '/api': 'http://localhost:8081',
      '/api/*': 'http://localhost:8081'
    }
  }).listen(8080, 'localhost', function(err) {
      if(err) throw new gutil.PluginError('webpack-dev-server', err);
      gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});

gulp.task('backend-dev-server', function(callback) {
  var callbackDone = false;
  var myConfig = Object.create(webpackBackendConfiguration);
  myConfig.debug = true;

  webpack(myConfig).watch(100, function() {
    if(!callbackDone) {
      callbackDone = true;
      callback();
    }
    nodemon.restart();
  });
});

gulp.task('watch', ['backend-dev-server', 'frontend-dev-server'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'webpack/dist/backend'),
    ignore: ['*'],
    watch: ['server/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Backend reloaded');
  });
});