import { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import styles from "./logout.module.css";
import { UseCustomHook } from "../../context/Context";
import { routePaths } from "../../constants/routePaths";

export default () => {
  const { state, navigate } = UseCustomHook();
  console.log(state.user);

  // useEffect(() => {
  //   if (state.isAuthenticated === false) {
  //     navigate(routePaths.Home);
  //   }
  // });

  const [info, setInfo] = useState({
    userName: "",
    email: "",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.cont}>
      <div className={styles.box}>
        <h1>LOG OUT</h1>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onchange={onchange}
        />
        <Input
          type="text"
          name="userName"
          placeholder="Username"
          onchange={onchange}
        />
        <button
          className={styles.login}
          onClick={() => {
            if (
              info.email === "" ||
              info.userName === "" ||
              info.email !== state.user.email ||
              info.userName !== state.user.userName
            ) {
              alert("Invalid username or email!");
            } else {
              localStorage.clear();
              navigate(routePaths.Home);
              console.log(state.user);
            }
          }}
        >
          Log out
        </button>
      </div>
    </form>
  );
};
