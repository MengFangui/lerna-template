let merge= require('webpack-merge');
let base = require('./webpack.base.js');

let devConfig = {
  mode: 'development',
  devtool: 'source-map'
}
module.exports = merge(base,devConfig)