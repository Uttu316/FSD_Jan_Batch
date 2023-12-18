import React from "react";
import PropTypes from "prop-types";
import "./btn.css";

const Button = (props) => {
  const { onClick, label, rIcon } = props;
  return (
    <button className="common_btn" onClick={onClick}>
      {label}
      {rIcon}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  rIcon: PropTypes.element,
};
