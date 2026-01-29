import Button from "../Buttons/Button.jsx";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoIosMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" input="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="text" input="Email" />
          </div>
           <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea type="text" input="text" rows={20} />
          </div>
        </form>
        <div style={{display:"flex",justifyContent:"end"}}>
            <Button text="SUBMIT"/>
        </div>
        
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service 24_7-pana 1 (1).svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
