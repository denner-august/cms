import express from "express";

import cors from "cors";
import fs from "fs";

const caminho = "./banco.json";

const server = express();
server.use(cors());
server.use(express.json());

function final(mudança) {
  try {
    const lendoArquivo = fs.readFileSync(caminho, "utf8");
    const transform = JSON.parse(lendoArquivo);

    transform.titulo1 = mudança;

    fs.writeFileSync(caminho, JSON.stringify(transform, null, 2), "utf-8");
    return "200";
  } catch (error) {
    console.log(error);
  }
}

server.get("/", (req, res) => {
  res.json({ mensagem: "ouvindo na rota /" });
});

server.get("/header", (req, res) => {
  const lendoArquivo = fs.readFileSync(caminho, "utf8");
  const transform = JSON.parse(lendoArquivo);
  res.json(transform);
});

server.post("/cms", async (req, res) => {
  const { titulo1 } = req.body;

  if (!titulo1) {
    return res.json({ mensagem: "falta o titulo" }).status(400);
  }

  const result = final(titulo1);

  if (result === "200") {
    return res.json({ mensagem: "titulo salvo com sucesso" }).status(200);
  }
  return res.json({ mensagem: "falha tente novamente" }).status(400);
});

server.listen(3001, () => console.log("ouvindo na porta 3001"));
