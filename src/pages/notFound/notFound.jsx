import Button from "../../components/btn/Button";
import styles from "./notFound.module.css";
import { routePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";

export default () => {
  const { navigate } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <h1>This page can't be found!</h1>

      <Button title="Go to Home" onclick={() => navigate(routePaths.Home)} />
    </div>
  );
};
