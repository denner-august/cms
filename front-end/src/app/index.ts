// arquivo eventos.js (back-end)

import EventEmitter from "events";

let caminho = "@/app/banco.json";

class MeuEmissor extends EventEmitter {
  constructor() {
    super();
  }

  fazerAlgo() {
    this.emit("ouvindo", "Denner");
  }

  //   fazerAlgo() {
  //     this.emit("meuEvento", { mensagem: "Algo foi feito!" });
  //   }

  //   ouvirAlgo() {
  //     this.on("ouvindo", () => console.log("estou ouvindo"));
  //   }
}

export const meuEmissor = new MeuEmissor();
// class pode emitir um evento mas (por enquanto) não da para ouvir um evento
// é necessario chamar a função para que ela emita o evento | não da para emitir o evento do front, ela irá ouvir mas não ira transmitir a ação

export let nome = "mudar texto";

function t() {
  console.log("teste");

  const newConteudo = JSON.stringify(caminho, null, 2);
}

meuEmissor.on("ouvindo", () => t());
