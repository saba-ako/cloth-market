import { useEffect } from "react";
import styles from "./buy.module.css";
import { UseCustomHook } from "../../context/Context";
import { routePaths } from "../../constants/routePaths";

export default () => {
  const { state, navigate } = UseCustomHook();

  useEffect(() => {
    if (Object.entries(state.buyItem).length === 0) {
      navigate(routePaths.Home);
    }
  });
  return <div className={styles.cont}></div>;
};
