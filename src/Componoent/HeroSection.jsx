import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="herostyle ">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className=" sm:mt-24 sm:ml-0   mr-10  ml-4  ">
            <img
              className="sm:ml-28 mt-20 border-l-8 border-b-8 border-red-100 border-double "
              src="https://cdn-icons.flaticon.com/png/512/2507/premium/2507657.png?token=exp=1643022106~hmac=f8e73d61148462636d58cec6ad48a9bc"
              alt=""
            ></img>
          </div>
          <div className="sm:h-auto h-96 border-red-100 border-double mt-20  sm:mr-8 border-t-8 border-r-8 sm:ml-20 ml-10   ">
            <div>
              <h1 className=" sm:text-7xl text-4xl sm:mt-44 mt-10 font-thin">
                Chra Othman
              </h1>
              <p className="mt-8 sm:text-2xl text-lg mr-2 sm:mr-40 sm:ml-8 ml-10 font-thin   ">
                My name is Chra Othman Iam 22 years old , I graduated in
                Computer Science in Sulaymaniyah University.
              </p>
             
              <button className="bg-red-400 hover:bg-red-500  ease-in duration-300 p-3 rounded-full mt-10 ml-8 px-4">
                {" "}
                Hire Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
