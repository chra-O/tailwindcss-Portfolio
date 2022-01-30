import React from "react";
import ExperyanceCard from "./ExperyanceCard";

export default function ShowEx() {
  return (
    <>
      <div className=" border-red-100 border-double  border-r-8 mr-0 sm:mr-8 sm:ml-28 ml-0">
        {" "}
        <div className="mt-24 sm:ml-28 ml-8">
          <p className="sm:text-6xl text-4xl font-thin  ">Certification :</p>
        </div>
        <ExperyanceCard
          img="http://localhost:3000/Image/saleshop.PNG"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/saleshop.PNG"
          desc="sale shop with bootstrap and php"
        />
         <ExperyanceCard
          img="http://localhost:3000/Image/saleshop.PNG"
          desc="sale shop with bootstrap and php"
        />
      </div>
    </>
  );
}
