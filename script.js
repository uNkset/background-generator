var _ = require('lodash');

var array = [1, 2, 4, 5, 7, 20];
console.log('answer:', _.without(array, 5));

var css = document.querySelector('h3');
var c1 = document.getElementById('c1');
var c2 = document.querySelector('#c2');
var body = document.getElementById('bg-color');

function setGradient() {
    body.style.background = 'linear-gradient(to right, '
    + c1.value + ', ' + c2.value + ')';

    css.textContent = body.style.background + ';';
}

c1.addEventListener('input', setGradient);
c2.addEventListener('input', setGradient);

// textContent, innerHtml, textNode