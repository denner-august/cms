const eventos = require("./index");

let nome = "Denner";

eventos.emit("nome", nome);
