  var path = require('path');

    var PATH = {
      app: path.resolve(__dirname, 'app'),
      build: path.resolve(__dirname, 'build')
    }

console.log('PATH.app: ', PATH.app);
console.log('PATH.build: ', PATH.build);

/** /
    module.exports = {
      entry: './app/index.js',
      output: {
        filename: 'build/bundle.js'
      }
    }
/**/

/**/
    module.exports = {
      entry: PATH.app,
      output: {
        path: PATH.build,
        filename: 'bundle.js'
      }
    }
/**/

/** /
    module.exports = {
      entry: ['./app/toBeLoadFirst', './app'],
      output: {
        filename: 'build/bundle.js'
      }
    }
/**/