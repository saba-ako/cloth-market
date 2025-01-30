import { useEffect, useState } from "react";
import { UseCustomHook } from "../../context/Context";
import styles from "./details.module.css";
import { routePaths } from "../../constants/routePaths";
import AddToCardBtn from "../../components/btn/AddToCardBtn";
import BuyBtn from "../../components/btn/BuyBtn";
import Modal from "../../components/modal/Modal";
import {
  addItemInCardAction,
  purchaseAction,
} from "../../context/actionCreator";

export default () => {
  const { state, navigate, dispatch } = UseCustomHook();
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
        <AddToCardBtn
          onclick={() => {
            if (state.user !== null) {
              const exists =
                state.card.filter((item) => item.id === state.details.id)
                  .length > 0;
              if (!exists) {
                dispatch(addItemInCardAction(state.details));
                localStorage.setItem("ItemInCard", state.details);
              }
            } else {
              setShowModal(true);
            }
          }}
        />
        <BuyBtn
          onclick={() => {
            if (state.user !== null) {
              dispatch(purchaseAction(state.details));
              navigate(routePaths.Home);
              localStorage.setItem("purchasedItem", state.details);
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
