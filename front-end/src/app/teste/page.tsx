"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cms() {
  const [input, stateInput] = useState(""); // salva o que esta sendo escrito no input

  useEffect(() => console.log(input), [input]); // apenas mostra o que esta sendo escrito no input

  function postFakeData() {
    axios.post("http://localhost:3001/cms", {
      titulo1: input,
    });
  } // envia para o back-end o que foi escrito no input

  const [titulo, Statetitulo] = useState("");

  useEffect(() => {
    async function getFakeData() {
      const fakedata = await axios
        .get("http://localhost:3001/header")
        .then((res) => res.data);

      console.log(fakedata.titulo1);

      Statetitulo(fakedata.titulo1);
    }

    getFakeData();
  }, []);

  return (
    <>
      <input type="text" onChange={(e) => stateInput(e.target.value)} />
      <button onClick={postFakeData}>mudar o nome do header</button>

      <ul>
        <li>{titulo}</li>
      </ul>
    </>
  );
}
