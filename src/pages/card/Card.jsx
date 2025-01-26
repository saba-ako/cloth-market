import Button from "../../components/btn/Button";
import { extraRoutePaths } from "../../constants/routePaths";
import { removeFromCardAction, showDetailsAction } from "../../context/actionCreator";
import { UseCustomHook } from "../../context/Context";
import styles from "./card.module.css";

export default () => {
  const { state, navigate, dispatch } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <h1>{state.card.length} products</h1>
      <div className={styles.box}>
        {state.card.map((e) => (
          <div key={e.id} className={styles.item}>
            <img
              src={e.image}
              onClick={() => {
                dispatch(showDetailsAction(e));
                navigate(extraRoutePaths.details);
              }}
            />
            <p
              className={styles.title}
              onClick={() => {
                dispatch(showDetailsAction(e));
                navigate(extraRoutePaths.details);
              }}
            >
              {e.title}
            </p>
            <p>{e.price}$</p>
            <Button
              title="Remove"
              onClick={() => dispatch(removeFromCardAction(e))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
