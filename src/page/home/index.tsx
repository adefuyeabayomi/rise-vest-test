import React from "react";

import "./style.css";
import Hero from "./Hero";
import Partners from "./Partners";
import HowItWorks from "./HowItWorks";

function Home(): React.JSX.Element {
  return (
    <main id="homepage">
      <Hero />
      <Partners />
      <HowItWorks />
    </main>
  );
}

export default Home;
