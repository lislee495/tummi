const webpack = require('webpack');
require('dotenv').config()
module.exports = {
  entry: ['babel-polyfill', './browser/App.jsx'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'MAPBOX_KEY', 'MASHAPE_KEY', 'YELP_API_KEY'])
  ],
  module: {
    rules: [{
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
};