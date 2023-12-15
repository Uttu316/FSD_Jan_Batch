import React from "react";
import Dropdown from "../../common/dropdown";
import Button from "../../common/button";

const langOption = [
  {
    label: "English",
    value: "eng",
  },
  {
    label: "Hindi",
    value: "hin",
  },
];

const Header = () => {
  const onClickSigin = () => {
    alert("Sigin");
  };
  return (
    <header className="hero-header-wrapper">
      <h2 className="hero-header-logo">NETFLIX</h2>
      <div className="hero-header-actions">
        <Dropdown options={langOption} />
        <Button label={"Sign In"} onClick={onClickSigin} />
      </div>
    </header>
  );
};

export default Header;
