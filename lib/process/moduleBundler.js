const path = require('path')
const createFile = require('../util/createFile')

const webpack = () => `
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
`

const rollup = () => `
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    commonjs({ include: '**/node_modules/**' }),
    nodeResolve()
  ]
}
`

module.exports = (rootPath, bundler) => {
  if (bundler === 'Webpack') {
    createFile(
      path.resolve(rootPath, 'webpack.config.js'),
      webpack()
    )
  }

  if (bundler === 'Rollup') {
    createFile(
      path.resolve(rootPath, 'rollup.config.js'),
      rollup()
    )
  }
}
