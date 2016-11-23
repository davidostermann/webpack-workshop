var path = require('path'); // path est installé par defaut par node et est donc accessible par la resolution des chemins par node
var webpack = require('webpack');
var validate = require('webpack-validator');

var PATH = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}


var configMultipleEntries = {
  entry: {
    vendor: ['lodash/truncate'],
    public: path.resolve(PATH.app, 'public'),
    admin: path.resolve(PATH.app, 'admin')
  },
  output: {
    path: PATH.build,
    filename: '[name].bundle.js',
  }
};

var configCommonsChunk = {
  entry: {
    public: path.resolve(PATH.app, 'public'),
    admin: path.resolve(PATH.app, 'admin')
  },
  output: {
    path: PATH.build,
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // => common.bundle.js
      chunks: ['public', 'admin']
    })
  ]
};

var configVendor = {
  entry: {
    vendor: ['lodash/truncate'],
    public: path.resolve(PATH.app, 'public')
  },
  output: {
    path: PATH.build,
    filename: 'public.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),    
  ]
};

module.exports = validate(configCommonsChunk);

