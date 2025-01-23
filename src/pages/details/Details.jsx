import { useEffect, useState } from "react";
import { UseCustomHook } from "../../context/Context";
import styles from "./details.module.css";
import { extraRoutePaths, routePaths } from "../../constants/routePaths";
import AddToCardBtn from "../../components/btn/AddToCardBtn";
import BuyBtn from "../../components/btn/BuyBtn";
import Modal from "../../components/modal/Modal";

export default () => {
  const { state, navigate } = UseCustomHook();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (Object.entries(state.details).length === 0) {
      navigate(routePaths.Home);
    }
  });

  return (
    <div className={styles.cont}>
      <h1>{state.details.title}</h1>
      <img src={state.details.image} />
      <h3>{state.details.description}</h3>
      <h2>{state.details.price}$</h2>
      <div className={styles.btns}>
        <AddToCardBtn />
        <BuyBtn
          onclick={() => {
            if (state.user !== null) {
              navigate(extraRoutePaths.buy);
            } else {
              setShowModal(true);
            }
          }}
        />
        {showModal && <Modal setter={setShowModal} />}
      </div>
    </div>
  );
};
