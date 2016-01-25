import webpack from 'webpack'

export default {
  debug: true,
  devtool: 'cheap-source-map',
  entry: './src/entry.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}
