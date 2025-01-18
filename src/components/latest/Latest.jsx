import { useEffect, useState } from "react";
import styles from "./latest.module.css";
import { UseCustomHook } from "../../context/Context";
import {
  addItemInCardAction,
  addLatestItemsAction,
  showDetailsAction,
} from "../../context/actionCreator";
import { extraRoutePaths } from "../../constants/routePaths";
import Button from "../btn/Button";
import AddToCardBtn from "../btn/AddToCardBtn";

export default () => {
  const { state, dispatch, navigate } = UseCustomHook();
  const [loading, setLoading] = useState(false);
  const { latestItems } = state;
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Json file");
        }
        return res.json();
      })
      .then((data) => dispatch(addLatestItemsAction(data)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.cont}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {latestItems.map((e) => (
        <div key={e.id} className={styles.box}>
          <img src={e.image} />
          <p
            onClick={() => {
              navigate(extraRoutePaths.details);
              dispatch(showDetailsAction(e));
            }}
          >
            {e.title}
          </p>
          <p>{e.price}$</p>
          <AddToCardBtn />
        </div>
      ))}
    </div>
  );
};
