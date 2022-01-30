import React from "react";

export default function ExperyanceCard(props) {
  return (
    <>
      <div className="     inline-flex   sm:m-16 m-4 h-64 ease-in duration-200   shadow-xl border-double shadow-neutral-200  overflow-x-hidden ">
        {" "}
        <div>
          {" "}
          <div className="   mb-2  ">
            <img src={props.img} className=" w-full h-44  " alt=""></img>{" "}
            <p className="hover:text-lg mt-5  ml-6 "> {props.desc}</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
