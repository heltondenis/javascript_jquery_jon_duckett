var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Noite';
} else if (hourNow > 12) {
  greeting = 'Tarde';
} else if (hourNow > 0) {
  greeting = 'Manha';
} else {
  greeting = 'Seja Bem Vindo';
}

document.write('<h3>' + greeting + '</h3>');
