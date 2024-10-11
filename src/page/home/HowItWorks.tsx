import React from "react";
import arrowRight from "../../assets/images/arrow-right.svg";
import howItWorks1 from "../../assets/images/how-it-works-1.png";

import howItWorks2 from "../../assets/images/how-it-works-2.png";

import howItWorks3 from "../../assets/images/how-it-works-3.png";

import howItWorks4 from "../../assets/images/how-it-works-4.png";

import "./style.css";

function HowItWorks(): React.JSX.Element {
  return (
    <section
      id="howitworks-section"
      className="howitworks-container-main main-spacing-x text-center text-md-left"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-xl-5">
            <img className="how-it-works-img p-4 center" src={howItWorks1} />
          </div>
          <div className="col-12 col-md-6 col-xl-5 order-md-first">
            <div>
              <h4 className="text-semibold">Invest your money in dollars</h4>
              <div className="py-1" />
              <p className="">
                By holding your investments in a stable currency, your money
                grows more over time and retains its value better.
              </p>
              <div className="py-2" />
              <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start align-items-center">
                  <div className="w-max-content">
                    <h6 className="color-main text-regular">
                      Start Investing Now
                    </h6>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2" />
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-xl-5">
            <img className="how-it-works-img p-4 center" src={howItWorks2} />
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div>
              <h4 className="text-semibold">Choose what's best for you</h4>
              <div className="py-1" />
              <p className="">
                Unlike other platforms, Rise lets you pick between stocks, US
                real estate and fixed income, according to your risk appetite.
                That way you can spread your risk and tap into different
                investments all in one place.{" "}
              </p>

              <div className="py-2" />
              <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start align-items-center">
                  <div className="w-max-content">
                    <h6 className="color-main text-regular">
                      Start Investing Now
                    </h6>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2" />
      <div className="container-fluid">
        <div className="row justify-content-center  align-items-center">
          <div className="col-12 col-md-6 col-xl-5">
            <img className="how-it-works-img p-4 center" src={howItWorks3} />
          </div>
          <div className="col-12 col-md-6 col-xl-5 order-md-first">
            <div>
              <h4 className="text-semibold">Set goals and reach them</h4>
              <div className="py-1" />
              <p className="">
                You can invest towards a goal on Rise--retirement, higher
                education, save for your home or travel budgets. Or create a
                goal of your own and invest periodically to achieve them.{" "}
              </p>
              <div className="py-2" />
              <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start align-items-center">
                  <div className="w-max-content">
                    <h6 className="color-main text-regular">
                      Start Investing Now
                    </h6>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2" />
      <div className="container-fluid">
        <div className="row justify-content-center  align-items-center">
          <div className="col-12 col-md-6 col-xl-5 order-sm-first">
            <img className="how-it-works-img p-4 center" src={howItWorks4} />
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div>
              <h4 className="text-semibold">
                We remember so you don't have to
              </h4>
              <div className="py-1" />
              <p className="">
                Our Auto-invest feature makes it easy to stay consistent, even
                when you forget. Set a funding amount, frequency and payment
                method and Rise will automatically fund your investment, on
                schedule.{" "}
              </p>
              <div className="py-2" />
              <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start align-items-center">
                  <div className="w-max-content">
                    <h6 className="color-main text-regular">
                      Start Investing Now
                    </h6>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
