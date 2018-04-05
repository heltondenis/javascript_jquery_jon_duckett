var today = new Date(); // Cria um novo objeto date
var hourNow = today.getHours(); // Verifica a data Atual
var greeting;

// Exibe uma mensagem de acordo com a hora atual
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
