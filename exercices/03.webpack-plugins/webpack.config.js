var path = require('path'); // path est installé par defaut par node et est donc accessible par la resolution des chemins par node

var PATH = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}

module.exports = {
  entry: {
    public: [path.resolve(PATH.app, 'toBeLoadFirst'), path.resolve(PATH.app, 'public')],
    admin: path.resolve(PATH.app, 'admin')
  },
  output: {
    path: PATH.build,
    filename: '[name].bundle.js'
  }
}

