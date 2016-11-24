# Exercice 3 : Webpack plugins

## Review exercice 1 & 2
on se place dans le dossier parent
	
	$ cd ..
	
on copie l'integralité du précédent exercice 
	
	$
	cp -r 02.webpack-config 04.webpack-plugins
	cd 04.webpack-plugins
 
Par soucis de clarté, on modifie package.json (le package name) et index.html (le title)

## mon premier plugin

Le plugin html-webpack-plugin genere la page html pour vous.

[documentation](https://github.com/ampedandwired/html-webpack-plugin)

Installer le module npm : 

	$ npm install -D html-webpack-plugin
	
Dans webpack.config.js, ajouter le module en tant que dependance :

	const HtmlWebpackPlugin = require('html-webpack-plugin');

Dans webpack.config.js, instanciez le plugin comme ci-dessous en l'ajoutant à la liste de plugin à éxécuter :

	...

	const config = {
	
		entry: ...,
		output: ...,
		
		plugins: [
			new HtmlWebpackPlugin()
		]
	}
	
Executer la command :
 
	$ webpack
 	
Vous constatez qu'un fichier index a été généré dans le dossier build
 
Vous pouvez ajouter des options. Par exemple, ajouter un hash, specifier le titre :
 
	...
	plugins: [
		new HtmlWebpackPlugin({
			title: 'title from webpack config'
			hash: true
		})
	]
	
## Avec template HTML

Vous pouvez aussi utilser un template :

* creer un dossier template
* créer un fichier index.template.js

La command

	$ mkdir template && cp index.html template/index.template.ejs
	
Dans index.template.ejs, remplacer la balise ```<title>``` par :

	<title><%= htmlWebpackPlugin.options.title %></title>

Dans webpack.config.js :

	...
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Exercice 3 - Webpack plugins - title from webpack config',
			template: 'template/index.template.ejs',
			hash: true
		})
	]

NB : ejs est le systeme de template par défaut. Vous avez la possibilité d'utiliser celui que vous souhaitez. cf [documentation](https://github.com/ampedandwired/html-webpack-plugin/blob/master/docs/template-option.md)

		
 	
 
 
 
 
 	
 	