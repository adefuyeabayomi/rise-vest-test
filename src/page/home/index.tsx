import React from "react";

import "./style.css";
import Hero from "./Hero";
import Partners from "./Partners";
import HowItWorks from "./HowItWorks";
import AssetClasses from "./AssetClasses";

function Home(): React.JSX.Element {
  return (
    <main id="homepage">
      <Hero />
      <Partners />
      <HowItWorks />
      <AssetClasses />
    </main>
  );
}

export default Home;
