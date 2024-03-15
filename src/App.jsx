import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";
import Socials from "./components/Social";
import FooterComp from "./components/Footer";
// import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full flex sm:flex-col justify-center items-center mx-auto ">
        <Navbar />
      </div>
      <div className="relative z-0 bg-[#230045] ">
        <div className="bg-hero-pattern hover:bg-opacity-50 transition-all bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <Socials />
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <ContactMe /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
