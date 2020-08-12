let merge= require('webpack-merge');
let base = require('./webpack.base.js');

let proConfig = {
  mode: 'production',
  devtool: false,
}
module.exports = merge(base,proConfig)