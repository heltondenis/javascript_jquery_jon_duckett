var preco;
var quantidade;
var total;

preco = 5;
quantidade = 14;
total = preco * quantidade;

var el = document.getElementById('cost');
el.textContent = '$' + total;
