import { optionMappingAction } from "../../context/actionCreator";
import { UseCustomHook } from "../../context/Context";
import styles from "./searchBar.module.css";

export default () => {
  const { state, dispatch } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <h2>Browse by</h2>
      <p
        onClick={() => {
          dispatch(optionMappingAction(state.items, "All Products"));
        }}
      >
        All Products
      </p>
      <p
        onClick={() => {
          dispatch(optionMappingAction(state.menClothes, `Men's Clothing`));
        }}
      >
        Men's Clothing
      </p>
      <p
        onClick={() => {
          dispatch(optionMappingAction(state.womenClothes, `Women's Clothing`));
        }}
      >
        Women's Clothing
      </p>
      <p
        onClick={() => {
          dispatch(optionMappingAction(state.jeweleries, "Jeweleries"));
        }}
      >
        Jeweleries
      </p>
      <p
        onClick={() => {
          dispatch(optionMappingAction(state.electronics, "Electronics"));
        }}
      >
        Electronics
      </p>
    </div>
  );
};
