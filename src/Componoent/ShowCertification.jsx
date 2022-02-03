import React from "react";
import CertificationCard from "./CertificationCard";

export default function ShowCertification() {
  return (
    <div className=" border-red-100 border-double  border-r-8 mr-0 sm:mr-8 sm:ml-28 ml-0 ">
      {" "}
      <div className="mt-20 sm:ml-28 ml-8">
        <p className="sm:text-6xl text-4xl font-thin  pt-10 ">Works :</p>
      </div>
   
      <CertificationCard
        img="http://localhost:3000/Image/saleshop.PNG"
        link="https://github.com/chra-O/Php-sale-shop"
        git="http://localhost:3000/Image/github.png"
        html="http://localhost:3000/Image/html.png"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn-icons-png.flaticon.com/512/569/569797.png"
        desc="sale shop with bootstrap and php"
      />
      <CertificationCard
        img="http://localhost:3000/Image/earth.PNG"
        link="https://github.com/chra-O/earthquakes-app"
        git="http://localhost:3000/Image/github.png"
        html=" http://localhost:3000/Image/atom.png"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php= "http://localhost:3000/Image/api.png"
        desc="earthquakes app with SGS API"
      />
      <CertificationCard
        img="http://localhost:3000/Image/ecommerse.PNG"
        link="https://github.com/chra-O/ecommerce"
        git="http://localhost:3000/Image/github.png"
        html=" http://localhost:3000/Image/atom.png"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://icon-library.com/images/d84be0039d.png"
        desc=" ecommerce (Backend and frontend) "
      />
      <CertificationCard
        img="http://localhost:3000/Image/raeactodo.PNG"
        link="https://github.com/chra-O/ToDo-React-Redux"
        git="http://localhost:3000/Image/github.png"
        html=" http://localhost:3000/Image/atom.png"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn.iconscout.com/icon/free/png-256/redux-3445829-2878755.png"
        desc="React to do list  "
      />
      <CertificationCard
        img="http://localhost:3000/Image/weather.PNG"
        link="https://github.com/chra-O/Weather-App"
        git="http://localhost:3000/Image/github.png"
        html=" http://localhost:3000/Image/atom.png"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php= "http://localhost:3000/Image/api.png"
        desc="Weather app   "
      />
         <CertificationCard
        img="http://localhost:3000/Image/htmlprofile.PNG"
        link="https://chra-o.github.io/chra_othman-Portfolio-/"
        git="http://localhost:3000/Image/github.png"
        html="http://localhost:3000/Image/html.png"
        css=" https://cdn-icons-png.flaticon.com/512/732/732007.png"
        desc="Portpolio by Only html and css"
        php="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy4cVOz7hvzIvSvCNo26Zm7DZRnpn6iQMfw&usqp=CAU"
      />
    </div>
  );
}
