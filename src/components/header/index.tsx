import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Twirl as Hamburger } from "hamburger-react";

import "./style.css";
import Overlay from "../overlay";

function Header(): React.JSX.Element {
  const location = useLocation();
  const { hash, pathname } = location;

  const [isOpen, setOpen] = useState(false);

  function toggleHamburger() {
    setOpen(!isOpen);
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/" && !hash) return true; // Root path with no hash
    return path === hash;
  };

  return (
    <header id="page-header" className="main-spacing-x">
      <div className="container-fluid">
        <div className="row align-items-center py-0 py-lg-3">
          <div className="w-max-content">
            <div className="logo-container">
              <img src={logo} />
            </div>
          </div>
          <div className="col"></div>
          <div className="w-max-content d-none d-lg-block">
            <div className="header-nav-container">
              <nav className="font-family-tomato-grotesk">
                <ul>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("") ? "active" : ""}`}
                      to={"/"}
                    >
                      Home
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("#products") ? "active" : ""}`}
                      to={"/#products"}
                    >
                      Products
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("#products") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("#investment-club") ? "active" : ""}`}
                      to={"/#investment-club"}
                    >
                      Investment Club
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("#investment-club") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("#blog") ? "active" : ""}`}
                      to={"/#blog"}
                    >
                      Blog
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("#blog") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("#about-us") ? "active" : ""}`}
                      to={"/#about-us"}
                    >
                      About Us
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("#about-us") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                  <motion.li whileHover={{ y: -3 }}>
                    <Link
                      className={`text-none color-main ${isActive("#FAQ") ? "active" : ""}`}
                      to={"/#FAQ"}
                    >
                      FAQs
                    </Link>
                    <br />
                    <span className="d-flex w-100">
                      <span
                        className={`active-dot color-main-bg ${isActive("#FAQ") ? "active" : ""}`}
                      ></span>
                    </span>
                  </motion.li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="w-max-content no-space d-block d-lg-none">
            <Hamburger
              toggled={isOpen}
              color="#07969e"
              size={19}
              toggle={toggleHamburger}
            />
            <Overlay styles={{}} isOpen={isOpen} toggle={toggleHamburger}>
              <div className="mobile-menu-container px-3">
                <div className="py-4" />
                <nav className="font-family-tomato-grotesk">
                  <ul>
                    <motion.li className="" whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("") ? "active" : ""}`}
                        to={"/"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">Home</h3>
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("#products") ? "active" : ""}`}
                        to={"/#products"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">Products</h3>
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("#investment-club") ? "active" : ""}`}
                        to={"/#investment-club"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">Investment Club</h3>
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("#blog") ? "active" : ""}`}
                        to={"/#blog"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">Blog</h3>
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("#about-us") ? "active" : ""}`}
                        to={"/#about-us"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">About Us</h3>
                      </Link>
                    </motion.li>
                    <motion.li whileHover={{ y: -3 }}>
                      <Link
                        className={`text-none color-main ${isActive("#FAQ") ? "active" : ""}`}
                        to={"/#FAQ"}
                        onClick={toggleHamburger}
                      >
                        <h3 className="text-light py-2">FAQs</h3>
                      </Link>
                    </motion.li>
                  </ul>
                </nav>
                <div className="py-5" />
              </div>
            </Overlay>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
