import { UseCustomHook } from "../../context/Context";
import styles from "./card.module.css";

export default () => {
  const { state } = UseCustomHook();
  return (
    <div className={styles.cont}>
      <h1>{state.card.length} products</h1>
      <div className={styles.box}>
        {state.card.map((e) => (
          <div key={e.id} className={styles.item}>
            <p>{e.title}</p>
            <img src={e.image} />
            <p>{e.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};
