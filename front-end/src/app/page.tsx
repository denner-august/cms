"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

// a outra pagina esta na pasta teste

export default function Home() {
  const [nomechange, StateNome] = useState("header exemplo");

  useEffect(() => {
    async function getFakeData() {
      const fakedata = await axios
        .get("http://localhost:3001/header")
        .then((res) => res.data);

      console.log(fakedata.titulo1);

      setTimeout(() => {
        StateNome(fakedata.titulo1);
      }, 1500);
    }

    getFakeData();
  }, []);

  return (
    <>
      <div className={styles.Container}>
        <h1>{nomechange}</h1>
      </div>

      <button className={styles.button}>mudar o nome do header</button>
    </>
  );
}
