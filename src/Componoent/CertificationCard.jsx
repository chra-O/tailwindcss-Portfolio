import React from "react";

export default function CertificationCard() {
  return (
    <>
      <div className="    inline-flex   m-16  h-64 ease-in duration-200   shadow-xl border-double shadow-neutral-200  overflow-x-hidden ">
        {" "}
        <div>
          {" "}
          <div className="   mb-2 ">
            <img
              src="http://localhost:3000/Image/portfolio.PNG"
              className=" w-full h-44 "
              alt=""
            ></img>{" "}
            <div className="  flex flex-row mt-2 justify-evenly  mb-2   ">
              {" "}
              <a
                href=" https://chra-o.github.io/chra_othman-Portfolio-/"
                className="opacity-50 caret-black hover:opacity-100 ease-in duration-200"
              >
                <img
                  className="w-6"
                  src="https://cdn-icons.flaticon.com/png/128/3128/premium/3128308.png?token=exp=1643198514~hmac=0dec76e1ea7f0622187df7f8346c37b5"
                  alt=""
                ></img>
              </a>
              <img
                className=" w-6 h-6  opacity-50 caret-black hover:opacity-100 ease-in duration-200 "
                src="https://cdn-icons.flaticon.com/png/128/721/premium/721790.png?token=exp=1643198609~hmac=f8751c9ebe65296bbb0457d4c7548675"
                alt=""
              ></img>
              <img
                className="w-6 h-6 opacity-50 caret-black hover:opacity-100 ease-in duration-200"
                src=" https://cdn-icons-png.flaticon.com/512/732/732007.png"
                alt=""
              ></img>
            </div>
            <p className=" mt-2 ml-6 font-thin">
              {" "}
              -portfolio project made by css and html
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
