const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env) => {
  const isDev = env.env === 'dev'
  const config = isDev
    ? require('./webpack.dev.js')
    : require('./webpack.prod.js')
  return merge(common, config)
}
