import React from "react";

import "./style.css";

function Regulations(): React.JSX.Element {
  return (
    <section id="regulations-section">
      <div className="py-5" />
      <div className="regulations-container-main ">
        <div className="py-5 text-center p-3">
          <div className="py-1" />
          <h3 className="text-regular">How we are Regulated</h3>
          <div className="py-2" />
          <p className="col-12 col-sm-10 col-md-9 col-lg-8 center">
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </p>
          <div className="py-3" />
        </div>
      </div>
    </section>
  );
}

export default Regulations;
