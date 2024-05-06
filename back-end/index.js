const event = require("eventos");

const primeiroEvento = new event();

function meunome(nome) {
  console.log("meu nome é " + nome);
}

primeiroEvento.on("nome", (nome) => meunome(nome));

module.exports = primeiroEvento;
