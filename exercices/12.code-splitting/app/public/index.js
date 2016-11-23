var comp1 = require('../component1');
var comp2 = require('../component2');
var comp3 = require('../component3');

var app = document.getElementById('app');

var app = document.getElementById('app');

var title = document.createElement('h1');
title.innerHTML = 'PUBLIC';
app.appendChild(title);

var child1 = document.createElement('div');
child1.innerHTML = comp1;
app.appendChild( child1 );

var child2 = document.createElement('div');
child2.innerHTML = comp2;
app.appendChild( child2 );

var child3 = document.createElement('div');
child3.innerHTML = comp3;
app.appendChild( child3 );