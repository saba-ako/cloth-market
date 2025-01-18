import styles from "./input.module.css";

export default (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className={styles.input}
      onChange={props.onchange}
    />
  );
};