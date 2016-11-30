var comp1 = require('./component1');
var comp2 = require('./component2');
var styles = require('./index.css');
var fox = require('./img/fox.jpg');
var foxBig = require('./img/fox-big.jpg');

var app = document.getElementById('app');

var child1 = document.createElement('div');
child1.innerHTML = comp1;
app.appendChild( child1 );

var child2 = document.createElement('div');
child2.innerHTML = comp2;
app.appendChild( child2 );

var child3 = document.createElement('img');
child3.src = fox;
app.appendChild( child3 );

var child3 = document.createElement('img');
child3.src = fox;
app.appendChild( child3 );

var child4 = document.createElement('img');
child4.src = foxBig;
app.appendChild( child4 );