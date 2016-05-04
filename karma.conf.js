var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    singleRun: !!process.env.CI,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/*.js',
    ],


    preprocessors: {
      './test/*.js': [ 'webpack', 'sourcemap', 'coverage' ],
      //'test/loadRoutes': [ 'webpack', 'sourcemap', 'coverate' ],
      './src/**/*.js': [ 'webpack', 'sourcemap', 'coverage' ],
    },

    reporters: [ 'mocha', 'coverage' ],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-coverage')
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
          /node_modules\/sinon\//,
        ],
        loaders: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
          {
            test   : /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          {
            test  : /\.styl$/,
            loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]?browsers=last 2 version!stylus?outputStyle=expanded&sourceMap'
          },
        ],
        
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon',
        },
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        //extensions: ['', '.json', '.js']
      },
      // fix issues with using enzyme
      externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window',
        'cheerio': 'window',
        'react/addons': true,
      },
      // fix? issue with tape dep on fs
      node: { fs: 'empty' },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: true,
          __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};

function resolveCwd() {
  const args = [].slice.call(arguments, 0);
  args.unshift(process.cwd());
  return path.join.apply(path, args);
};
