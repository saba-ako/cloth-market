import styles from "./navBar.module.css";
import { extraRoutePaths, routePaths } from "../../constants/routePaths";
import { UseCustomHook } from "../../context/Context";
import basket from "../../images/basket.png";
import acc from "../../images/acc.png";
import AccModal from "../accModal/AccModal";
import { useState } from "react";

const links = Object.entries(routePaths);

export default () => {
  const { navigate, state } = UseCustomHook();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="73.5 60 53 80"
          viewBox="73.5 60 53 80"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="img"
          aria-label="Homepage"
        >
          <g>
            <path d="M95.1 74l-21.6 32h9.4l21.6-32h-9.4z"></path>
            <path d="M108 69c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path>
            <path d="M112.2 74l-34.7 52h9.3l34.7-52h-9.3z"></path>
            <path d="M117.1 94l-21.6 32h9.4l21.6-32h-9.4z"></path>
            <path d="M92 140c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path>
          </g>
        </svg>
        <h1 className={styles.title} onClick={() => navigate(routePaths.Home)}>
          Cielo Apparel
        </h1>
      </div>
      <div className={styles.right}>
        {links.map((link) => {
          const [key, value] = link;
          if ((state.user && key !== "Login") || !state.user) {
            return (
              <button
                key={key}
                className={styles.link}
                onClick={() => navigate(value)}
              >
                {key}
              </button>
            );
          }
        })}
        <div>
          <img src={basket} onClick={() => navigate(extraRoutePaths.Card)} />
          <span>{state.card.length}</span>
        </div>
        <img
          src={acc}
          className={styles.acc}
          onClick={() => setShowModal(!showModal)}
        />
        {showModal && <AccModal setter={setShowModal} />}
      </div>
    </div>
  );
};
