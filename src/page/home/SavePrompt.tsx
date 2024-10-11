import React from "react";
import savingsApp from "../../assets/images/the-app.png";

import "./style.css";

function SavePrompt(): React.JSX.Element {
  return (
    <section
      id="save-prompt-section"
      className="save-prompt-container-main main-spacing-x"
    >
      <div className="py-4" />
      <div className="container-fluid">
        <div className="row align-items-center g-3">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="saving-app-mockup-container">
              <img className="center" src={savingsApp} />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="save-prompt-texts center text-center text-lg-left">
              <p className="font-family-tomato-grotesk">The Rise App</p>
              <h3 className="text-semibold">
                Save For Your <span className="color-secondary">Future</span>
              </h3>
              <p>
                With Rise, you achieve your financial goals faster. Save for
                school, your home, vacations, your children’s future and more.
              </p>
              <div className="py-2" />
              <button className="save-button font-family-tomato-grotesk center d-block d-lg-none">
                Start Saving
              </button>
              <button className="save-button font-family-tomato-grotesk d-none d-lg-block">
                Start Saving
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavePrompt;
