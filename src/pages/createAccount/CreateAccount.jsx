import styles from "./createAccount.module.css";
import Button from "../../components/btn/Button";
import Input from "../../components/input/Input";
import { UseCustomHook } from "../../context/Context";
import { authHandler } from "../../api/auth";
import { useState } from "react";

export default () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    const {name, value} = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    authHandler("register", user)
      .then((data) => console.log(data))
      .catch((err) => setError(err.msg))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={submitHandler} className={styles.cont}>
      <div className={styles.box}>
        <h1>Create New Account</h1>
        <Input
          name="userName"
          type="text"
          placeholder="UserName"
          onchange={onchange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onchange={onchange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onchange={onchange}
        />
        <Button title="Sign Up  " type="submit" />
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
      </div>
    </form>
  );
};
