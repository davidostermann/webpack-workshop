var path = require('path'); // path est installé par defaut par node et est donc accessible par la resolution des chemins par node
var HtmlWebpackPlugin = require('html-webpack-plugin');
var validate = require('webpack-validator');

var PATH = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}

const config = {
  entry: PATH.app,
  output: {
    path: PATH.build,
    filename: 'bundle.js'
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Exercice 3 - Webpack plugins - title from webpack config',
      hash: true,
      template: path.resolve(__dirname, 'template/index.template.ejs'),
    })
  ]
}

module.exports = validate(config);

