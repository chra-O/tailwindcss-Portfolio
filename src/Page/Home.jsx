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
      <div className="ml-20 ">
        <AboutComponent />
      </div>
      <ShowCertification />
    </div>
  );
}
