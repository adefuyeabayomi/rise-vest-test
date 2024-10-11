import React from "react";
import ios from "../../assets/images/iosStoreButton.png";
import playStore from "../../assets/images/playstoreButton.png";
import appMockup from "../../assets/images/app-mockup-1.png";

import "./style.css";

function Hero(): React.JSX.Element {
  return (
    <section id="hero-section" className="hero-container-main main-spacing-x">
      <div className="py-0 py-lg-3" />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-left py-4 col-12 col-sm-12 center">
              <div className="py-4" />
              <h3 className="d-block d-lg-none color-main text-semibold">
                Dollar investments that help you grow
              </h3>
              <h1 className="d-none d-lg-block color-main text-semibold">
                Dollar investments that help you grow
              </h1>
              <p className="text-dark py-3 text-medium">
                We put your money in high quality assets that help you build
                wealth and achieve your financial goals.
              </p>
              <div className="container-fluid no-space">
                <div className="row justify-content-center justify-content-lg-start no-space">
                  <img className="store-btn-img no-space" src={ios} />
                  <img className="store-btn-img no-space" src={playStore} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="hero-img-container">
              <img className="center" src={appMockup} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
