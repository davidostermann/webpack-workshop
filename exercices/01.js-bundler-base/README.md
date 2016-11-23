# Exercice 1 : Webpack command

## Initialiser le projet
```
$ npm init 
```
```
$ npm init -y
```

## Installer Webpack
```
$ npm i --save-dev webpack
```
```
$ npm i -D webpack
```

## Look at node_modules
```
$ ls node_modules
$ ls node_modules/.bin
```
*Dans .bin, vous trouvez les executables*

## Test webpack command
```
$ webpack
```

```
$ webpack -help
```

## Créer la structure de projet
```
$ mkdir app build
```
*NB : N'oubliez pas d'ajouter le dossier build dans votre .gitignore*

## Premier build
```
$ touch app/index.js
```

##### *index.js*
```
document.write('Ça marche');
```
##### *webpacommand lines*
	$ webpack app/index.js build/bundle.js
est pareil que :
	$ webpack --entry app/index.js --output-filename build/bundle.js

## Premier build avec dependence
```
$ touch app/component.js
```

##### *component.js*
```
module.exports = ' avec une dependence de module';
```

##### *index.js*
```
document.write('Ça marche' + require('./component.js'));
```

```
$ webpack app/index.js build/bundle.js
```


## Index.html
```
touch index.html
```

##### *index.html*
Dans le code html, ajoutez un tag script pointant vers le resultat du build js :

	<script src="build/bundle.js"></script>
	
## watch mode
	$ webpack app/index.js build/bundle.js --watch
	
### un peu plus de js
Dans le code html, ajouter un div avec un id app

	<div id="app"></div>
Dans vous index.js

	document.getElementById('app').append('ça marche ' + require('./component.js'));
