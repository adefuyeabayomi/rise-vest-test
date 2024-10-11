import React from "react";
import arrowRight from "../../assets/images/arrow-right.svg";
import assetStock from '../../assets/images/asset-stocks.png'
import assetRealEstate from '../../assets/images/asset-realestate.png'
import assetFixed from '../../assets/images/asset-fixedincome.png'

import "./style.css";

function AssetClasses(): React.JSX.Element {
  return (
    <section id="asset-classes-section" className="asset-classes-container-main main-spacing-x">
      <div className="py-5" />
      <div className="container-fluid">
        <div className="row justify-content-center g-3">
          <div className="col-12 col-sm-10 col-lg-4">
            <div className="assets-container center">
              <div className="a-header stock">
                <img className="center" src={assetStock} />
              </div>
              <div className="py-3" />
              <div className="text-center p-2 p-sm-3">
                <h5 className="text-regular">Stock</h5>
                <div className="py-1" />
                <p>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.                </p>
                <p><span className="gray-text-light">Historical Return: </span> 14% Per Annum</p>
                <p><span className="gray-text-light">Risk Level: </span>Medium</p>
              </div>
              <div className="py-3" />
              <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                  <div className="w-max-content">
                    <p className="color-main text-semibold">
                      Learn How Stocks Works
                    </p>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
              <div className="py-2" />
            </div>
          </div>
          <div className="col-12 col-sm-10 col-lg-4">
            <div className="assets-container center">
              <div className="a-header realestate">
                <img className="center" src={assetRealEstate} />
              </div>
              <div className="py-3" />
              <div className="text-center p-2 p-sm-3">
                <h5 className="text-regular">Real Estate</h5>
                <div className="py-1" />
                <p>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.</p>
                <p><span className="gray-text-light">Historical Return: </span> 14% Per Annum</p>
                <p><span className="gray-text-light">Risk Level: </span>Medium</p>
              </div>
              <div className="py-3" />
              <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                  <div className="w-max-content">
                    <p className="color-main text-semibold">
                      Learn How Real Estate Works
                    </p>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
              <div className="py-2" />
            </div>
          </div>
          <div className="col-12 col-sm-10 col-lg-4">
            <div className="assets-container center">
              <div className="a-header fixed">
                <img className="center" src={assetFixed} />
              </div>
              <div className="py-3" />
              <div className="text-center p-2 p-sm-3">
                <h5 className="text-regular">Fixed Income</h5>
                <div className="py-1" />
                <p>A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency. Suitable for those looking for a stable investment with returns.
                </p>
                <p><span className="gray-text-light">Historical Return: </span> 14% Per Annum</p>
                <p><span className="gray-text-light">Risk Level: </span>Medium</p>
              </div>
              <div className="py-3" />
              <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                  <div className="w-max-content">
                    <p className="color-main text-semibold">
                      Learn How Fixed Income Works
                    </p>
                  </div>
                  <div className="p-1 w-max-content" />
                  <div className="w-max-content">
                    <img src={arrowRight} />
                  </div>
                </div>
              </div>
              <div className="py-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssetClasses;
