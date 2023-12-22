import React from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import styles from "./faq.module.css";

const FaqCard = (props) => {
  const { title, desc, onClick, isOpen } = props;

  return (
    <div className={styles.faqCard_wrapper}>
      <div onClick={onClick} className={styles.faqCardHeader}>
        <p className={styles.faqTitle}>{title}</p>
        {isOpen && <IoMdClose fontSize={24} />}
        {!isOpen && <IoMdAdd fontSize={24} />}
      </div>

      <div
        className={`${styles.faqDesc} ${isOpen ? styles.faqDescActive : ""}`}
      >
        {desc}
      </div>
    </div>
  );
};

export default FaqCard;
