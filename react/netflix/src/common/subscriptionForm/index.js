import React, { useState } from "react";
import Button from "../button";
import { FaChevronRight } from "react-icons/fa6";
import styles from "./subscription_form.module.css";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const onChangeEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  return (
    <div className={styles.subscription_form_wrapper}>
      <p className={styles.subscription_form_heading}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className={styles.subscription_form_input_wrapper}>
        <div className={styles.subscription_form_input_container}>
          <input
            id="email"
            className={styles.subscription_form_input}
            onChange={onChangeEmail}
          />
          <label
            htmlFor="email"
            className={styles.subscription_form_input_label}
          >
            Email address
          </label>
        </div>
        <Button rIcon={<FaChevronRight />} label="Get Started" />
      </div>
    </div>
  );
};
export default SubscriptionForm;
