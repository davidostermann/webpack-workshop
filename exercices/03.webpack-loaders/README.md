# Exercice 3 : Webpack loaders

## Review exercice 2

on se place dans le dossier parent
	
	$ cd ..
	
on copie l'integralité du précédent exercice 
	
	$
	cp -r 02.webpack-config 03.webpack-loaders
	cd 03.webpack-loaders
 
Par soucis de clarté, on modifie package.json (le package name) et index.html (le title)

## JSON loader

Créer un fichier css ; par exemple :

	touch app/data.json
	
Dans model.json, ajoutez :

	var data = require('./data.json')
	
Executer le build :

	$ webpack
	
Vous constatez une erreur. votre config ne prend pas en charge les extensions css

Appelons à l'aide le loader de json.

Dans webpack.config.js, ajoutez :

	module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json',
          include: PATHS.app
        }
      ]
	};
	
Après avoir builder, vous constatez que le json a été ajouter au build.

## Css loader & Style loader

Créer un fichier css ; par exemple :

	touch app/index.css

Appliquer un style au body

Dans index.js, ajoutez :

	var styles = require('./index.css')
	
Executer le build :

	$ webpack
	
Vous constatez une erreur. votre config ne prend pas en charge les extensions css

Appelons à l'aide les loader css et style :

	npm i css-loader style-loader --D
	
	
css-loader permet à webpack de consommer les module de type css.
style-loader applique les styles via javascript
Les 2 modules sont inséparable

Dans webpack.config.js, ajoutez :

	module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        }
      ]
	};
	
Après avoir builder, vous constatez que le css a été ajouter au build et qu'il est pris en compte par le navigateur.

## Url loader & file loader

Permet de prendre en compte les image quel requis en tant que module dans le js ou en tant qu'url dans le css. 
Nous allons voir plus tard que nous pouvons aussi traiter les image inline dans le html. (?)

	$ npm install url-loader file-loader -D
	
Rajoutons une image dans index.js

	var child3 = document.createElement('img');
	child3.src = fox;
	app.appendChild( child3 );
	
Build
	
	$ webpack
	
Dans le fichier build/bundle.js, vous pouvez constatez que l'image a été exporté en base64.

Vous ne voulez peut-être pas que vos images soient toutes exportées en base64.

Pourquoi : // TODO

Rajoutons une image plus grande :
	
	var foxBig = require('./img/fox-big.jpg');
	...
    var child4 = document.createElement('img');
    child4.src = foxBig;
    app.appendChild( child4 );

Rajoutons une limite :
	...
        {
          test: /\.css$/,
          query: {limit: 50000},
          loaders: ['style', 'css'],
          include: PATHS.app
        },
     ...

Dans le fichier build/bundle.js, vous pouvez constatez que fox-big est rendu en tant que fichier.

Rajoutons une inmage dans index.css

// TODO
	

	
