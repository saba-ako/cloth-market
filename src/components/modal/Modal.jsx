import styles from "./modal.module.css";
import Button from "../btn/Button";
import { UseCustomHook } from "../../context/Context";
import { routePaths } from "../../constants/routePaths";

export default ({ setter }) => {
  const { navigate } = UseCustomHook();
  return (
    <div className={styles.cont}>
      <h1>
        You are not logged in! You must log in first to add items in card!
      </h1>
      <Button title="Log in" onclick={() => navigate(routePaths.Login)} />
      <Button title="close" onclick={() => setter(false)} />
    </div>
  );
};
