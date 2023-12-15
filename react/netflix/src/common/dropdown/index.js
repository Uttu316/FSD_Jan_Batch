import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

const Dropdown = (props) => {
  const { options = [] } = props;
  return (
    <div className="common_dropdown_wrapper">
      <span className="common_dropdown_icon">🌐</span>
      <select className="common_dropdown_select">
        {Array.isArray(options) &&
          options.map((opt, ind) => (
            <option key={ind} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
};

export default Dropdown;
