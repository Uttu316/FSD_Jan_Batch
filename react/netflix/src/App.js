import React from "react";
import HeroBanner from "./components/heroBanner";
import Counter from "./components/counter";
import "./App.css";
import Reasons from "./components/reasons";
import FAQs from "./components/faqs";

const MyNetflixApp = () => {
  return (
    <div>
      <HeroBanner />
      <Reasons />
      <FAQs />
      {/* <Counter /> */}
    </div>
  );
};

export default MyNetflixApp;
