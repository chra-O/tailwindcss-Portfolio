import React from "react";
import CertificationCard from "./CertificationCard";

export default function ShowCertification() {
  return (
    <div className=" border-red-100 border-double  border-r-8 mr-8 sm:ml-28 ml-5">
      {" "}
      <div className="mt-24 sm:ml-28 ml-8">
        <p className="sm:text-6xl text-4xl font-thin mb-7 ">Works :</p>
      </div>
   
      <CertificationCard
        img="http://localhost:3000/Image/saleshop.PNG"
        link="https://github.com/chra-O/Php-sale-shop"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/128/721/premium/721790.png?token=exp=1643198609~hmac=f8751c9ebe65296bbb0457d4c7548675"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn-icons-png.flaticon.com/512/569/569797.png"
        desc="sale shop with bootstrap and php"
      />
      <CertificationCard
        img="http://localhost:3000/Image/earth.PNG"
        link="https://github.com/chra-O/earthquakes-app"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/512/3074/premium/3074150.png?token=exp=1643284372~hmac=97b40dd9fc68bfd80e877cc262f91aa4"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn-icons.flaticon.com/png/512/4166/premium/4166099.png?token=exp=1643283466~hmac=4d76bf67854c9e32cf3e21f6628e76f4"
        desc="earthquakes app with SGS API"
      />
      <CertificationCard
        img="http://localhost:3000/Image/ecommerse.PNG"
        link="https://github.com/chra-O/ecommerce"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/512/3074/premium/3074150.png?token=exp=1643284372~hmac=97b40dd9fc68bfd80e877cc262f91aa4"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://icon-library.com/images/d84be0039d.png"
        desc=" ecommerce (Backend and frontend) "
      />
      <CertificationCard
        img="http://localhost:3000/Image/raeactodo.PNG"
        link="https://github.com/chra-O/ToDo-React-Redux"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/512/3074/premium/3074150.png?token=exp=1643284372~hmac=97b40dd9fc68bfd80e877cc262f91aa4"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn.iconscout.com/icon/free/png-256/redux-3445829-2878755.png"
        desc="React to do list  "
      />
      <CertificationCard
        img="http://localhost:3000/Image/weather.PNG"
        link="https://github.com/chra-O/Weather-App"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/512/3074/premium/3074150.png?token=exp=1643284372~hmac=97b40dd9fc68bfd80e877cc262f91aa4"
        css=" https://cdn-icons-png.flaticon.com/512/5968/5968671.png"
        php="https://cdn-icons.flaticon.com/png/512/4166/premium/4166099.png?token=exp=1643283466~hmac=4d76bf67854c9e32cf3e21f6628e76f4"
        desc="Weather app   "
      />
         <CertificationCard
        img="http://localhost:3000/Image/htmlprofile.PNG"
        link="https://chra-o.github.io/chra_othman-Portfolio-/"
        git="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
        html="https://cdn-icons.flaticon.com/png/128/721/premium/721790.png?token=exp=1643198609~hmac=f8751c9ebe65296bbb0457d4c7548675"
        css=" https://cdn-icons-png.flaticon.com/512/732/732007.png"
        desc="Portpolio by Only html and css"
        php="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy4cVOz7hvzIvSvCNo26Zm7DZRnpn6iQMfw&usqp=CAU"
      />
    </div>
  );
}
