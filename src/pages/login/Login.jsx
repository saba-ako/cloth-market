import { useState } from "react";
import Input from "../../components/input/Input";
import { extraRoutePaths, routePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";
import styles from "./login.module.css";
import { authHandler } from "../../api/auth";
import { loginAction } from "../../context/actionCreator";
import { authActions } from "../../constants/authActions.";

export default () => {
  const { navigate, dispatch } = UseCustomHook();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    authHandler(authActions.signIn, user)
      .then((data) => {
        dispatch(loginAction(data));
        navigate(routePaths.Home);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  const onchange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={submitHandler} className={styles.cont}>
      <div className={styles.box}>
        <h1>LOG IN</h1>
        <Input
          onchange={onchange}
          type="text"
          name="userName"
          placeholder="Username"
        />
        <Input
          onchange={onchange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className={styles.login}>Log In</button>
        <h2>Don't have an account?</h2>
        <button
          type="submit"
          className={styles.link}
          onClick={() => navigate(extraRoutePaths.createAccount)}
        >
          Create account!
        </button>
        {loading && <h1>Loading...</h1>}
      </div>
    </form>
  );
};
