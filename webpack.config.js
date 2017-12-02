'use strict';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'calendar-calculator.js',
    library: 'CalendarCalculator',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: "source-map",
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
  resolve: {
    extensions: ['.js']
  }
};