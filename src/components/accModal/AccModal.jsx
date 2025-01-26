import { routePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";
import Button from "../btn/Button";
import styles from "./accModal.module.css";

function AccModal({ setter }) {
  const { state, navigate } = UseCustomHook();

  if (state.user) {
    return (
      <div className={styles.cont}>
        <div className={styles.titles}>
          <h1>{state.user.userName}</h1>
          <h3>{state.user.email}</h3>
        </div>
        <h3>Products in card: {state.card.length}</h3>
        <h3>Purchased Items: {state.purchasedItems.length}</h3>
        <Button
          title="Logout"
          onclick={() => {
            setter(false);
            localStorage.clear();
            window.location.reload();
            navigate(routePaths.Home);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.cont}>
        <h1>You are not logged in</h1>
        <Button
          title="Login"
          onclick={() => {
            setter(false);
            navigate(routePaths.Login);
          }}
        />
      </div>
    );
  }
}

export default AccModal;
