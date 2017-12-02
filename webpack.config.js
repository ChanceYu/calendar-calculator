'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const packageJSON = require('./package.json');

const year = new Date().getFullYear();

let config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'calendar-calculator.js',
    library: 'CalendarCalculator',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [ ],
  resolve: {
    extensions: ['.js']
  }
};

if(env === 'production'){
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false,
      preamble: 
`/**
* ${packageJSON.name}.js
* Version: ${packageJSON.version}
* Address: (https://github.com/ChanceYu/calendar-calculator)
* Author: ChanceYu
* Licensed under the MIT license
*/`
    }
  }));
  config.externals = webpackUMDExternal({
    'moment': 'moment'
  });
}else if(env === 'development'){
  config.output.filename = 'calendar-calculator.all.js';
  config.devtool = 'source-map';
}


module.exports = config