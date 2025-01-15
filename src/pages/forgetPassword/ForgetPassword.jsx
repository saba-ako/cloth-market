import styles from "./forgetPassword.module.css";
import Button from "../../components/btn/Button";
import Input from "../../components/input/Input";

export default () => {
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <h1>Reset Password</h1>
        <Input type="email" placeholder="Email Address" />
        <Button title="Reset Password" />
      </div>
    </div>
  );
};
