import React from "react";
import "./btn.css";

const Button = (props) => {
  const { onClick, label } = props;
  return (
    <button className="common_btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
