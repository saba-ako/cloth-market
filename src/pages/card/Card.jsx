import Button from "../../components/btn/Button";
import { extraRoutePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";
import styles from "./card.module.css";

export default () => {
  const { state, navigate } = UseCustomHook();
  return (
    <div className={styles.cont}>
      {state.card.length === 0 && (
        <div>
          <h1>You don't have an account! please create account first!</h1>
          <Button
            title="Create Account"
            onclick={() => navigate(extraRoutePaths.createAccount)}
          />
        </div>
      )}
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
