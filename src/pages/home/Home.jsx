import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Latest from "../../components/latest/Latest";
import Products from "../../components/products/Products";
import { UseCustomHook } from "../../context/Context";

export default () => {
  const { state } = UseCustomHook();

  return (
    <div className={styles.cont}>
      <h1>Introducing Your New Workout Wardrobe</h1>
      <Link to="/shop" className={styles.shop}>
        Start shopping
      </Link>
      <div className={styles.inner2}>
        <div className={styles.box}>
          <h2>The Cielo Story</h2>
        </div>
        <div className={styles.box}>
          <h2>View Our Collection</h2>
        </div>
        <div className={styles.box}>
          <h2>Read About Us</h2>
        </div>
      </div>
      <h1>LATEST ARRIVALS</h1>
      <Latest />
      <h1>ALL PRODUCTS</h1>
      <Products />
    </div>
  );
};
