import styles from "./shop.module.css";
import SearchBar from "./searchBar/SearchBar";
import Products from "../../components/products/Products";
import { UseCustomHook } from "../../context/Context";

export default () => {
  const { state } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <SearchBar />
      <div className={styles.right}>
        <h1>{state.title}</h1>
        <p>{state.amount} Products</p>
        <div className={styles.board}>
          <Products />
        </div>
      </div>
    </div>
  );
};
