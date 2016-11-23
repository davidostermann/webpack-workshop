# Exercice 12 : Webpack code splitting

## Pourquoi ?

Pourquoi séparer son code ?
(vos réponses)
moi :
- poids
- cache du navigateur

NB: attention au multiple requête

NB: en buildant son code dans un simple fichier, on ne profite de façon optimal pas du cache du navigateur.

Il existe différent contextes qui impliquent une façon différente de séparer son code.

NB : avec http2, les multiples requêtes seront moins pénalisantes.

## Review exercice 1 & 2

	$
	npm init -y
	npm i webpack -D
	mkdir app build app/model && touch index.html app/index.js app/component1.js  app/component2.js  app/model/model.js webpack.config.js
  
ou
	
	$
    npm init -y
    npm i webpack -D
    cp ../2.webpack-config/index.html index.html
    cp -r ../2.webpack-config/app/ ./app
    mkdir build

On va quand même réécrire le webpack.config.js

	$ touch webpack.config.js

Dans webpack.config.js

	var path = require('path');

    var PATH = {
      app: path.resolve(__dirname, 'app'),
      build: path.resolve(__dirname, 'build')
    }
    
    module.exports = {
      entry: './app/index.js',
      output: {
        filename: 'build/bundle.js'
      }
    }
        
    
## Concept 1 : Ajoutons une entrée

Imaginons que nous avons deux pages : une page publique et un back-office

#### Preparons notre structure

	$ mkdir app/public app/admin
	$ cp app/index.js app/public/index.js
	$ cp app/index.js app/admin/index.js
 
 Modifiez app/public/index.js et app/admin/index.js de façon à les différencier (en ajoutant un h1 par exemple)
 
#### Dans webpack.config.js

Modifiez entry et output comme ci-dessous :

    module.exports = {
      entry: {
        public: path.resolve(PATH.app, 'public'),
        admin: path.resolve(PATH.app, 'admin')
      },
      output: {
        path: PATH.build,
        filename: '[name].bundle.js'
      }
    }
    
 Vous remarquerez qu'on utilise la clé (ici public et admin) sous la forme [name] dans output
 
 NB: vous pouvez toujours inclure vos polyfill comme ceci :
 
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

 
Vous remarquerez aussi que notre fichier model.js est écrit deux fois. Tachons d'optimiser ça dans le prochaine exercice.
 
NB : il ne peut y avoir qu'un seul webpack runtime par page ; il y en a un par sortie (dans admin.bundle.js et dans public.bundle.js). On ne peut donc charger admin.bundle.js et public.bundle.js dans la même page.
 
## Concept 2 : CommonChunks

Ajoutons un composant 3 qui nous allons inmpoter uniquement dans public

	var comp3 = require('../component3');

Ajoutons le plugins CommonChunks pour isoler les modules commun à public et admin

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
        name: 'common',
        chunks: ['public', 'admin']
      })
    ]
    
Observons le résultat :
Vous remarquerez que tous les modules communs ont été ajoutés à common.bundle.js 

NB : il ne peut y avoir qu'un seul webpack runtime par page ; ici, il est dans common.bundle.js

## Concept 3 : Isolons les vendors
	
Ajoutons lodash :

	$ npm i -S lodash
	
Utilisons lodash dans model/index.js :

    var truncate = require('lodash/truncate');

    var tropLong = 'Bonjour, je suis un model ; mais aussi un texte. Je suis vraiment trop long, mais alors vraiment trop long !';

    module.exports = _.truncate(tropLong, {
      length: 15,
      separator: '[\.,;]? '
    });
    
Testons (si le --watch, il faut juste relancer le navigateur) :

	$ webpack

Utilisons lodash dans model/index.js

     module.exports = {
      entry: {
      	vendor: ['lodash/truncate']
        public: [path.resolve(PATH.app, 'toBeLoadFirst'), path.resolve(PATH.app, 'public')],
        admin: path.resolve(PATH.app, 'admin')
      },
      output: {
        path: PATH.build,
        filename: 'bundle.js'
      }
    },
    
    ...
    plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
    
Observons le résultat :
Vous remarquerez que lodash/truncate a été isolé dans vendor.bundle.js 

NB : il ne peut y avoir qu'un seul webpack runtime par page ; ici, il est dans vendor.bundle.js
    
## Concept 4 : async module avec requireEnsure

Très utile dans les single page avec router

[TODO]
 
 
 
 
 
 	
 	