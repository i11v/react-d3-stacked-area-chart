var path = require('path');

var appDir = path.resolve(__dirname, 'app')
  , distDir = path.resolve(__dirname, 'dist')
  , vendorDir = path.resolve(__dirname, 'node_modules')
  , reactPath = path.resolve(vendorDir, 'react/dist/react.min.js');

module.exports = {
  cache: true,
  debug: true,

  entry: [
    path.join(appDir, 'app.js')
  ],

  resolve: {
    alias: {
      react: reactPath
    }
  },

  output: {
    path: distDir,
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ],

    noParse: [reactPath]
  },

  devtool: 'eval'
};
