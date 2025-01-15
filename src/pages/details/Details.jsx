import { useEffect } from "react";
import Button from "../../components/btn/Button";
import { UseCustomHook } from "../../context/Context";
import styles from "./details.module.css";
import { extraRoutePaths, routePaths } from "../../constants/routePaths";
import { addItemInCardAction, buyAction } from "../../context/actionCreator";

export default () => {
  const { state, dispatch, navigate } = UseCustomHook();

  useEffect(() => {
    if (Object.entries(state.details).length === 0) {
      navigate(routePaths.Home);
    }
  });

  return (
    <div className={styles.cont}>
      <h1>{state.details.title}</h1>
      <img src={state.details.image} />
      <h3>{state.details.description}</h3>
      <h2>{state.details.price}$</h2>
      <div className={styles.btns}>
        <Button
          onclick={() => dispatch(addItemInCardAction(state.details))}
          title="Add to Card"
        />
        <Button
          onclick={() => {
            dispatch(buyAction(state.details));
            navigate(extraRoutePaths.buy);
          }}
          title="Buy"
        />
      </div>
    </div>
  );
};
