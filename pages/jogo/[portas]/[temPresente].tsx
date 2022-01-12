import Link from "next/link";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.css";
import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdPortasValida = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdPortasValida && temPresenteValido);
  }, [portas]);

  useEffect(() => {
    setPortas(criarPortas(+router.query.portas, +router.query.temPresente));
  }, [router?.query]);

  function rendereizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  console.log(criarPortas(3, 2));
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? rendereizarPortas() : <h2>Valores Inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
