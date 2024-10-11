import React from "react";

import "./style.css";
import Hero from "./Hero";
import Partners from "./Partners";
import HowItWorks from "./HowItWorks";
import AssetClasses from "./AssetClasses";
import SavePrompt from "./SavePrompt";
import Regulations from "./Regulation";
import OurCustomers from "./OurCustomers";
import Community from "./Community";

function Home(): React.JSX.Element {
  return (
    <main id="homepage">
      <Hero />
      <Partners />
      <HowItWorks />
      <AssetClasses />
      <SavePrompt />
      <Regulations />
      <OurCustomers />
      <Community />
    </main>
  );
}

export default Home;
