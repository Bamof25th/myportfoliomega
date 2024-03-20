import { BrowserRouter } from "react-router-dom";

import { About, Contact,Socials, Experience, FooterComp, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


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
