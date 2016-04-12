import _ from 'lodash/object'
import path from 'path'
import webpack from 'webpack'

const DEBUG = !process.argv.includes('--release')
const VERBOSE = process.argv.includes('--verbose')

// set node environment
process.env.NODE_ENV = DEBUG ? 'development' : 'production'

//
// Common configuration chunk to be used for both
// client-side (client.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

const uglifyConf = {
  compress: {
    screw_ie8: true,
    warnings: VERBOSE
  }
}

const config = {
  output: {
    publicPath: '/',
    sourcePrefix: '  '
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    cached: VERBOSE,
    cachedAssets: VERBOSE,
    chunkModules: VERBOSE,
    chunks: VERBOSE,
    colors: true,
    hash: DEBUG,
    reasons: VERBOSE,
    timings: DEBUG,
    version: DEBUG
  },

  plugins: [
    new webpack.ProvidePlugin({ 'Promise': 'es6-promise' })
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js',]
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: [`babel?${JSON.stringify({ presets: ['es2015'] })}`]
      }
    ]
  }
}

//
// Configuration for the client-side bundle (client.js)
// -----------------------------------------------------------------------------

const clientConfig = _.merge({}, config, {
  entry: './src/index.js',
  output: {
    filename: 'index.min.js',
    library: 'WeVision',
    libraryTarget: 'umd',
    path: path.join(__dirname, '../')
  },

  externals: {
    "superagent": "request"
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    ...
    (
      DEBUG
      ? []
      : [
          new webpack.optimize.UglifyJsPlugin(uglifyConf)
        ]
    )
  ]
})

export default clientConfig
