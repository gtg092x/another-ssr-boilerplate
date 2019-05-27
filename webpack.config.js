const path = require('path')
const {
  NODE_ENV = 'development',
  WEBPACK_PORT = 3001,
} = process.env
const __DEV__ = NODE_ENV === 'development'

const config = {
  entry: {
    bundle: path.resolve(__dirname, './src/app/main.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devtool: __DEV__ ? 'eval-source-map' : 'source-map',
  mode: __DEV__ ? 'development' : 'production',
  optimization: {
    minimize: !__DEV__,
    mergeDuplicateChunks: !__DEV__,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    port: WEBPACK_PORT,
    compress: true,
  },
}

module.exports = config
