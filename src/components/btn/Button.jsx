import styles from "./btn.module.css";

export default (props) => {
  return (
    <button className={styles.btn} onClick={props.onclick}>
      {props.title}
    </button>
  );
};
