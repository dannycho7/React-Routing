module.exports = {
  entry: {
    './src/static/js/bundle':'./src/main.js'
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
  }
}
