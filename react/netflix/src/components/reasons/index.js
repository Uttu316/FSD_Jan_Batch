import React from "react";
import styles from "./reasons.module.css";
import {
  AiFillAmazonSquare,
  AiFillAndroid,
  AiFillBank,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Reasons = () => {
  return (
    <section className={styles.reasons_wrappers}>
      <h3 className={styles.reasons_heading}>More reasons to join</h3>
      <div className={styles.reasonsList}>
        {reasons.map((i, ind) => (
          <div key={ind} className={styles.reasonCard}>
            <p className={styles.reasonTitle}>{i.title}</p>
            <div className={styles.reasonIcon}>{i.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const reasons = [
  {
    title: "Stories tailored to your taste",
    icon: <AiFillAmazonSquare />,
  },
  {
    title: "Cancel or switch plans anytime",
    icon: <AiFillAndroid />,
  },
  {
    title: "A place just for kids",
    icon: <AiFillBank />,
  },
  {
    title: "For your phone, tablet, laptop, and TV",
    icon: <AiFillDribbbleCircle />,
  },
];

export default Reasons;
