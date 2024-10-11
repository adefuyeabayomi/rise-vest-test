import React from "react";
import downloadAppImg from "../../assets/images/download-app-img.png";
import ios from "../../assets/images/iosStoreButton.png";
import playStore from "../../assets/images/playstoreButton.png";

import "./style.css";

function DownloadAppPromptSection(): React.JSX.Element {
  return (
    <section
      id="download-app-prompt-section"
      className="download-app-prompt-container-main main-spacing-x"
    >
      <div className="download-app-prompt-container px-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div>
                <p className="d-prompt-text text-semibold">
                  Download The Rise App
                </p>
                <h3 className="text-regular">
                  Join our 100,000 users investing and setting long term goals!
                </h3>
                <div className="py-1" />
                <p>Dollar investments that help you grow.</p>
                <div className="py-2" />
                <div className="container-fluid">
                  <div className="row justify-content-center justify-content-lg-start">
                    <img className="store-btn-img no-space" src={ios} />
                    <img className="store-btn-img no-space" src={playStore} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={downloadAppImg} className="download-app-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadAppPromptSection;
