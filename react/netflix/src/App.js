import React, { useState } from "react";
import HeroBanner from "./components/heroBanner";
import Counter from "./components/counter";
import "./App.css";
import Reasons from "./components/reasons";
import FAQs from "./components/faqs";
import ClassBasedComponent from "./components/classBasedComponent";

const MyNetflixApp = () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <HeroBanner />
      <Reasons />
      <FAQs />
      {/* <Counter /> */}
      {/* {state && <ClassBasedComponent count={5} closeComp={setState} />} */}
    </div>
  );
};

export default MyNetflixApp;
