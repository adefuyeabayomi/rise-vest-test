import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profileImg from "../../assets/images/profile-img.jpeg";

import "./style.css";

function OurCustomers(): React.JSX.Element {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      id="our-customers-section"
      className="our-customers-container-main main-spacing-x text-main text-center"
    >
      <div className="py-5" />
      <div>
        <h3 className="color-main">From The People Who Use Rise</h3>
        <div className="py-1" />
        <p className="font-family-tomato-grotesk col-11 col-sm-9 col-md-7 center">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </div>
      <div className="py-4" />
      <div>
        <Carousel responsive={responsive}>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                    <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-container mx-2 p-2 py-4">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="py-1" />
            <div className="container-fluid">
              <div className="row align-items-center no-space">
                <div className="w-max-content no-space">
                  <div>
                  <img src={profileImg} className="review-profile-image" />
                  </div>
                </div>
                <div className="w-max-content">
                  <div className="font-family-tomato-grotesk">Laye</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </section>
  );
}

export default OurCustomers;
