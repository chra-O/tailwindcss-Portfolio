import React from "react";
import AboutComponent from "../Componoent/AboutComponent";
import HeroSection from "../Componoent/HeroSection";
import NavBar from "../Componoent/NavBar";
import ShowCertification from "../Componoent/ShowCertification";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="sm:ml-0 md:ml-0 lg:ml-0  mt-20 ">
        <AboutComponent />
      </div>

      <ShowCertification />
    </div>
  );
}
