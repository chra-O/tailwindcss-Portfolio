import React from "react";
import CertificationCard from "./CertificationCard";

export default function ShowCertification() {
  return (
    <div className="mt-20 border-red-100 border-double  border-r-8 mr-4 ml-28">
      {" "}
      <div className="mt-52  ml-36">
        <p className="sm:text-6xl text-4xl font-thin mb-7 ">Expiryanse:</p>
      </div>
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
      <CertificationCard />
    </div>
  );
}
