import styles from "./contact.module.css";
import img from "../../images/contact-img.avif";
import Input from "../../components/input/Input";

export default () => {
  return (
    <div className={styles.cont}>
      <div>
        <h1>CONTACT</h1>
        <p>
          visit our store
          <br />
          Address: 500 Terry Francine Street
          <br />
          San Francisco, CA 94158
          <br />
          Phone: 123-456-7890
          <br />
          Email: info@my-domain.com
        </p>
        <div className={styles.message}>
          <textarea placeholder="Type your message here..."></textarea>
          <button onClick={() => {}}>SUBMIT</button>
        </div>
      </div>
      <img src={img} width={"60%"} />
    </div>
  );
};
