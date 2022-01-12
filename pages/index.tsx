import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde de portas?"
            value={qtdPortas}
            onChange={(novaQtd) => setQtdPortas(novaQtd)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com presente?"
            value={comPresente}
            onChange={(novaQtd) => setComPresente(novaQtd)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link passHref href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
