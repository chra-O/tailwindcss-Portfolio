import React from "react";

export default function CertificationCard() {
  return (
    <>
      <div className="   inline-flex   w-80 h-52 hover:scale-110 ease-in duration-200  border-4  overflow-hidden bg-blue-800  ">
        {" "}
        <div>
          {" "}
          <div className="relative  w-80 h-44   ">
            <img
              src="http://localhost:3000/Image/portfolio.PNG"
              className="relative"
            ></img>{" "}
            <div className=" absolute w-80 h-44   hover:opacity-100 "> hi</div>
          </div>
        </div>
      </div>
    </>
  );
}
