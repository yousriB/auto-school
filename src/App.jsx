import React from "react";
import styles from "./style";
import {
  Hero,
  About,
  Contact,
  Faq,
  Footer,
  Instructors,
  Navbar,
  Services,
  Schedule,
} from "./components";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      {/* <div>
        <Navbar />
      </div> */}

      <Hero />

      <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Instructors />
          <Schedule />
          <Contact />
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
