import React from "react";
import logoBlack from "../../assets/images/logo-black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { Link } from "react-router-dom";

function Footer(): React.JSX.Element {
  return (
    <footer id="page-footer" className="main-spacing-x">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-3 my-4">
            <div>
              <img className="footer-logo" src={logoBlack} />
            </div>
            <div className="py-2" />
            <div>
              <ul>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Contact Info
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Rise Impact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4">
            
          <div>
              <h6 className="font-family-tomato-grotesk">Explore</h6>
            </div>
            <div className="py-2" />
            <div>
              <ul>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Investment Club <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Blog <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Updates <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Events <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4">
            
          <div>
          <h6 className="font-family-tomato-grotesk">Products</h6>
            </div>
            <div className="py-2" />
            <div>
              <ul>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Rise App
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Asset Classes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4">
            
          <div>
          <h6 className="font-family-tomato-grotesk">Contact Us</h6>
            </div>
            <div className="py-2" />
            <div>
              <ul>
                <li>
                  <Link to={"tel:+2348187147405"} className="text-none font-family-tomato-grotesk text-dark">
                  0818-714-7405 <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"mailto:hello@rise.capital"} className="text-none font-family-tomato-grotesk text-dark">
                  hello@rise.capital <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                  Newsletter <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                  Instagram <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-none font-family-tomato-grotesk text-dark">
                    Twitter
                  </Link> <span className="footer-arrow"> <FontAwesomeIcon icon={faArrowRight} /></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
