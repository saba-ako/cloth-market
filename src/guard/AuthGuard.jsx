import Button from "../components/btn/Button";
import { routePaths } from "../constants/routePaths";
import { UseCustomHook } from "../context/Context";
import styles from "./authGuard.module.css";

export default ({ children }) => {
  const { state, navigate } = UseCustomHook();

  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <div className={styles.cont}>
          <h1>
            You aren't logged in. You must log in first to add items in card!
          </h1>
          <Button title="Login" onclick={() => navigate(routePaths.Login)} />
        </div>
      )}
    </>
  );
};
