import React from "react";
import communityImg from '../../assets/images/community.png'

import "./style.css";

function Community(): React.JSX.Element {
  return (
    <section id="community-section" className="community-container-main main-spacing-x text-center text-md-left">
              <div className="py-5" />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-md-last">
            <div className="py-4">
              <img className="community-img center" src={communityImg} />
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="community-text-contents-container text-md-left">
              <h3 className="text-regular">Join The Rise Community</h3>
              <div className="py-2" />
              <p>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>
              <div className="py-2" />
              <button className="community-btn font-family-tomato-grotesk">Join Our Community</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
