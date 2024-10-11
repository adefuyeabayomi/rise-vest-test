import React from "react";
import parterLogoGroup from "../../assets/images/partners-logo-group.png";
import "./style.css";

function Partners(): React.JSX.Element {
  return (
    <section id="partners" className="py-3">
      <h6 className="font-family-tomato-grotesk text-center text-dark text-regular px-3 py-3">
        We are supported by
      </h6>
      <div className="partner-container-main">
        <img src={parterLogoGroup} />
      </div>
    </section>
  );
}

export default Partners;
