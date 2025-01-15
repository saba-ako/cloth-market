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
        <div className={styles.inner}>
          <div className={styles.left}>
            <Input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <button className={styles.login}>Log In</button>
        </div>
        <button
          className={styles.link}
          onClick={() => navigate(extraRoutePaths.forgetPassword)}
        >
          Forget Password?
        </button>
        <h2>Or sign up using</h2>
        <div className={styles.otherOptions}>
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={gmail} alt="gmail" />
        </div>
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
