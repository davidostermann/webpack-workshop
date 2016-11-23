var comp1 = require('../component1');
var comp2 = require('../component2');

var app = document.getElementById('app');

var title = document.createElement('h1');
title.innerHTML = 'ADMIN';
app.appendChild(title);

var child1 = document.createElement('div');
child1.innerHTML = comp1;

var child2 = document.createElement('div');
child2.innerHTML = comp2;

app.appendChild( child1 );
app.appendChild( child2 );