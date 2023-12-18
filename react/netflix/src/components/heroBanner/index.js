import React from "react";
import Header from "../header";
import "./heroBanner.css";
import SubscriptionForm from "../../common/subscriptionForm";

const HeroBanner = () => {
  return (
    <section className="hero-banner-wrapper">
      <Header />
      <div className="hero_banner_content_wrapper">
        <h1 className="hero_banner_heading">
          Unlimited movies, TV shows and more
        </h1>
        <h4 className="hero_banner_subheading">
          Starts at ₹149. Cancel anytime.
        </h4>
        <SubscriptionForm />
      </div>
    </section>
  );
};

export default HeroBanner;
