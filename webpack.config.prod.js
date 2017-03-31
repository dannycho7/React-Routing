var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    './src/production-server':'./src/server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: [nodeExternals()]
}
