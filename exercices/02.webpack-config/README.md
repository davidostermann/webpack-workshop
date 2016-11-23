# Exercice 2 : Webpack config

## Review exercice 1

	npm init -y

	npm i webpack -D

	mkdir app build && touch index.html app/index.js app/component.js

* Ajouter du contenu dans index.html
* Ajouter du code js dans index.js et dans component.js
* Lancer la command webpack --watch


## Creation de webpack-config

	touch webpack-config.js
	
### La config la plus simple

    module.exports = {    
      entry: './app/index.js',
      output: {
        filename: 'build/bundle.js'
      }
    }
	
### Ajoutons des composants

	$ mkdir model && touch model/model.js component1.js component2.js

Dans component1.js et component2.js, ajoutez :
	
	var model = require('./model/model')
	
Observons le résultat du build
	
	... (cf. build/bundle.js)
	
Vous remarquez que 'model' n'a été écrit qu'une seul fois.


### Utilisons un peu node

	var path = require('path');

    var PATH = {
      app: path.resolve(__dirname, 'app'),
      build: path.resolve(__dirname, 'build')
    }
	
    module.exports = {
      entry: PATH.app,
      output: {
        path: PATH.build,
        filename: 'bundle.js'
      }
    }
    ...
    
Vous remarquerez que index.js est pris par defaut. Si vous renommez 'index.js', ça ne fonctionne plus.
	
### Fichier qui doit être chargé en premier (ex. polyfill)

Créez un fichier 'fileToBeLoadFirst.js'

	$ touch app/fileToBeLoadFirst.js
	
Ajoutez dans le chemin dans du fichier à la clé 'entry qui devient un tableau

    module.exports = {
      entry: ['./app/toBeLoadFirst', './app'],
      output: {
        filename: 'build/bundle.js'
      }
    }
    
Cette façon de faire est souvent utilisé pour ajouter des polyfill


### Webpack validator

Installez le module via npm :

	$ npm install -D webpack-validator
	
Ajouter la dependence en première ligne webpack-config.js :

	var validate = require('webpack-validator');
	
Puis isoler votre config dans une variable pour plus de clarté :

	...
	var config = {
      entry: PATH.app,
      output: {
        path: PATH.build,
        filename: 'bundle.js'
      }
    };
	
Puis utiliser la function validate pour valider votre config :

	...
	module.exports = validate(config); 
	
Vous pouvez modifier les clés pour voir comment réagit le validator ; par exemple :
	
	-- dans webpack.config.js ----------- 
	 
	var config = {
      entry: PATH.app,
      output: {
        pathzzz: PATH.build,
        filename: 'bundle.js'
      }
    };
    
 Puis lancez la compilation
    
    -- dans votre utilitaire de commande ----------- 
    
	$ webpack 
	
