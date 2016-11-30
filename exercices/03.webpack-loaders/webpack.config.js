var path = require('path'); 
var validate = require('webpack-validator');

var PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}

const config = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app,
        exclude: './node_modules'
      },
      {
        test: /\.jpg|png$/,
        loader: 'url' ,
        query: {limit: 50000},
        include: PATHS.app,
        exclude: './node_modules'
      }
    ]
  }
};

module.exports = validate(config);
