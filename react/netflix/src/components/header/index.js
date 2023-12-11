import React from "react";

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
