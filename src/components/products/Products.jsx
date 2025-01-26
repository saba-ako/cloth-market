import { useEffect, useState } from "react";
import { UseCustomHook } from "../../context/Context";
import {
  addElectronicsAction,
  addItemInCardAction,
  addItemsAction,
  addJeweleriesAction,
  addManClothesAction,
  addWomanClothesAction,
  showDetailsAction,
} from "../../context/actionCreator";
import styles from "./products.module.css";
import { extraRoutePaths, routePaths } from "../../constants/routePaths";
import AddToCardBtn from "../btn/AddToCardBtn";
import Modal from "../modal/Modal";

export default () => {
  const { state, dispatch, navigate } = UseCustomHook();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(addItemsAction(data));
        const jeweleries = data.filter((e) => e.category === "jewelery");
        const menClothes = data.filter((e) => e.category === `men's clothing`);
        const womenClothes = data.filter(
          (e) => e.category === `women's clothing`
        );
        const electronics = data.filter((e) => e.category === "electronics");
        dispatch(addJeweleriesAction(jeweleries));
        dispatch(addManClothesAction(menClothes));
        dispatch(addWomanClothesAction(womenClothes));
        dispatch(addElectronicsAction(electronics));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.cont}>
      {loading && <h1>Loading...</h1>}
      {error && <h1> {error}</h1>}
      {state.option.map((e) => (
        <div className={styles.box} key={e.id}>
          <img
            src={e.image}
            onClick={() => {
              navigate(extraRoutePaths.details);
              dispatch(showDetailsAction(e));
            }}
          />
          <p
            onClick={() => {
              navigate(extraRoutePaths.details);
              dispatch(showDetailsAction(e));
            }}
          >
            {e.title}
          </p>
          <p>{e.price}$</p>
          <AddToCardBtn
            onclick={() => {
              if (state.user !== null) {
                const exists =
                  state.card.filter((item) => item.id === e.id).length > 0;
                if (!exists) {
                  dispatch(addItemInCardAction(e));
                }
              } else {
                setShowModal(true);
              }
            }}
          />
          {showModal && <Modal setter={setShowModal} />}
        </div>
      ))}
    </div>
  );
};
