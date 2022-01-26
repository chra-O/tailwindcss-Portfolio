import React from "react";
import CertificationCard from "./CertificationCard";

export default function ShowCertification() {
  return (
    <div className="mt-20 border-red-100 border-double  border-r-8 mr-4 ml-28">
      {" "}
      <div className="mt-52  ml-36">
        <p className="sm:text-6xl text-4xl font-thin mb-7 ">Expiryanse:</p>
      </div>
      <CertificationCard
        img="http://localhost:3000/Image/portfolio.PNG"
        link="https://chra-o.github.io/chra_othman-Portfolio-/"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/128/721/premium/721790.png?token=exp=1643198609~hmac=f8751c9ebe65296bbb0457d4c7548675"
        css=" https://cdn-icons-png.flaticon.com/512/732/732007.png"
      
        desc="Portpolio by Only html and css"
      />
      <CertificationCard
        img="http://localhost:3000/Image/portfolio.PNG"
        link="https://github.com/chra-O/Php-sale-shop"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/128/721/premium/721790.png?token=exp=1643198609~hmac=f8751c9ebe65296bbb0457d4c7548675"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn-icons-png.flaticon.com/512/569/569797.png"
        desc="Portpolio by Only html and css"
      />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
    </div>
  );
}
