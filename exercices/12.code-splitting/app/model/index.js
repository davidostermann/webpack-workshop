/** /
    var truncate;

    require.ensure(['lodash/truncate'], function(truncate) {
      console.log('OK: ', truncate);
    });
/**/

    var truncate = require('lodash/truncate');

    var tropLong = 'Bonjour, je suis un model ; mais aussi un texte. Je suis vraiment trop long, mais alors vraiment trop long !';
    //module.exports = tropLong;
    /**/
    module.exports = truncate(tropLong, {
          length: 15,
          separator: '[\.,;]? '
        });
    /**/