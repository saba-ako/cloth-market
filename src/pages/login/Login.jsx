import Input from "../../components/input/Input";
import { extraRoutePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";
import styles from "./login.module.css";
import twitter from "../../images/twitter-icon.png";
import facebook from "../../images/fb.png";
import gmail from "../../images/gmail.png";

export default () => {
  const { navigate } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <h1>LOG IN</h1>
        <Input type="email" placeholder="Username Or Email Address" />
        <Input type="password" placeholder="Password" />
        <button className={styles.login}>Log In</button>
        <h2>Don't have an account?</h2>
        <button
          className={styles.link}
          onClick={() => navigate(extraRoutePaths.createAccount)}
        >
          Create account!
        </button>
      </div>
    </div>
  );
};
