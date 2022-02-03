import React from "react";

export default function ExperyanceCard(props) {
  return (
    <>
      <div className=" w-96 h-80   inline-flex   sm:m-10 m-4 ease-in duration-200   shadow-xl border-double shadow-neutral-200   ">
        {" "}
        <div>
          {" "}
          <div className=" mb-2  ">
            <img src={props.img} className=" w-full  h-full mt-2 " alt=""></img>{" "}
            <p className=" mt-1   ml-6 "> {props.desc}</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
