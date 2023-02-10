const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')

function optimized (prodConfig) {
  return {
    ...prodConfig,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        })
      ]
    }
  }
}

module.exports = (env) => {
  const isDev = env.env === 'dev'
  const config = isDev
    ? require('./webpack.dev.js')
    : optimized(require('./webpack.prod.js'))
  return merge(common, config)
}
