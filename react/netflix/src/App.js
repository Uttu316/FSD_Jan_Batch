import React from "react";
import HeroBanner from "./components/heroBanner";
import Counter from "./components/counter";
import "./App.css";
import Reasons from "./components/reasons";

const MyNetflixApp = () => {
  return (
    <div>
      <HeroBanner />
      <Reasons />
      {/* <Counter /> */}
    </div>
  );
};

export default MyNetflixApp;
