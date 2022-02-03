import React from "react";
import ExperyanceCard from "./ExperyanceCard";

export default function ShowEx() {
  return (
    <>
      <div className=" border-red-100 border-double  border-r-8 mr-0 sm:mr-8 sm:ml-28 ">
        {" "}
        <div className="mt-24 sm:ml-28 ml-8">
          <p className="sm:text-6xl text-4xl font-thin  ">Certifications :</p>
        </div>
        <ExperyanceCard
          img="http://localhost:3000/Image/fiveonelab.JPG"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/bit.JPG"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/wan.JPG"
          desc="sale shop with bootstrap and php"
        />
          <ExperyanceCard
          img="http://localhost:3000/Image/mobile.jpg"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/google.jpg"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/najmadin.jpg"
          desc="sale shop with bootstrap and php"
        />
          <ExperyanceCard
          img="http://localhost:3000/Image/fb1.jpg"
          desc="sale shop with bootstrap and php"
        />
        <ExperyanceCard
          img="http://localhost:3000/Image/fb2.jpg"
          desc="sale shop with bootstrap and php"
        />
        <ExperyanceCard
          img="http://localhost:3000/Image/fb3.jpg"
          desc="sale shop with bootstrap and php"
        />
      </div>
    </>
  );
}
