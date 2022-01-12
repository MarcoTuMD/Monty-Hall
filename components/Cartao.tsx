import styles from "../styles/Cartao.module.css";

interface CartaoProps {
  bgcolor?: string;
  children?: any;
}

export default function Cartao(props: CartaoProps) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor ?? "#fff" }}
      className={styles.cartao}
    >
      {props.children}
    </div>
  );
}
