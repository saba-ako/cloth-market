import styles from "./createAccount.module.css";
import Button from "../../components/btn/Button";
import Input from "../../components/input/Input";
import { UseCustomHook } from "../../context/Context";
import {
  addEmailAction,
  addPasswordAction,
  addUserNameAction,
  confirmPasswordAction,
} from "../../context/actionCreator";
import { authHandler } from "../../api/auth";
import { useState } from "react";

export default () => {
  const { state, dispatch } = UseCustomHook();
  const { userName, email, password, confirmedPassword } = state;
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    userName,
    password,
    email,
  });

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <h1>Create New Account</h1>
        <Input
          type="email"
          placeholder="Email"
          onchange={(e) => dispatch(addEmailAction(e.target.value))}
        />
        <Input
          type="text"
          placeholder="UserName"
          onchange={(e) => dispatch(addUserNameAction(e.target.value))}
        />
        <Input
          type="password"
          placeholder="Password"
          onchange={(e) => dispatch(addPasswordAction(e.target.value))}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          onchange={(e) => dispatch(confirmPasswordAction(e.target.value))}
        />
        <Button
          title="Create Account"
          onclick={() => {
            if (
              email === "" ||
              password === "" ||
              userName === "" ||
              confirmedPassword === "" ||
              confirmedPassword !== password
            ) {
              alert("Error");
            } else {
              setLoading(true);
              authHandler("register", user)
                .then((data) => console.log(data))
                .catch((err) => setErrorMsg(err.msg))
                .finally(() => setLoading(false));
            }
          }}
        />
      </div>
    </div>
  );
};
