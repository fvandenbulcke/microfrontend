const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const server = {
  target: 'node',
  performance: {
    hints: false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new NodemonPlugin()
  ]
}

const client = {
  target: 'web',
  performance: {
    hints: false
  },
  node: {
    fs: 'empty',
    module: 'empty'
  },
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ]
}

module.exports = [server, client]
