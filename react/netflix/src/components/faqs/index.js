import React, { useState } from "react";
import { faqsData } from "./data";
import styles from "./faqs.module.css";
import FaqCard from "../../common/faq/faqCard";

const FAQs = () => {
  const [open, setOpen] = useState(null);
  const onClick = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <div className={styles.faqs_wrapper}>
      <h3 className={styles.faqs_heading}>Frequently Asked Questions</h3>
      <div className={styles.faqs_list}>
        {faqsData.map((faq, index) => (
          <FaqCard
            isOpen={open === index}
            key={index}
            title={faq.title}
            onClick={() => onClick(index)}
            desc={faq.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
