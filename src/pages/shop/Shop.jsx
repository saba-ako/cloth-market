import styles from "./shop.module.css";
import SearchBar from "./searchBar/SearchBar";
import Products from "../../components/products/Products";
import { UseCustomHook } from "../../context/Context";
import { useState } from "react";

export default () => {
  const { state } = UseCustomHook();

  console.log(state.option);

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
