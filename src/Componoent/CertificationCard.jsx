import React from "react";

export default function CertificationCard(props) {
  return (
    <>
      <div className="     inline-flex   sm:m-16 m-4 h-64 ease-in duration-200   shadow-xl border-double shadow-neutral-200  overflow-x-hidden ">
        {" "}
        <div>
          {" "}
          <div className="   mb-2 ">
            <img src={props.img} className=" w-full h-44  " alt=""></img>{" "}
            <div className="  flex flex-row mt-2 justify-evenly  mb-2  ">
              {" "}
              <a
                href={props.link}
                className="opacity-50 caret-black hover:opacity-100 transition duration-150 ease-in-out"
                data-tooltip-target="tooltip-default"
              >
                <img className="w-6" src={props.git} alt=""></img>
              </a>
              <img
                className=" w-6 h-6  opacity-50 caret-black hover:opacity-100 ease-in duration-200 "
                src={props.html}
                alt=""
              ></img>
              <img
                className="w-6 h-6 opacity-50 caret-black hover:opacity-100 ease-in duration-200"
                src={props.css}
                alt=""
              ></img>
              <img
                className="w-6 h-6 opacity-50 caret-black hover:opacity-100 ease-in duration-200"
                src={props.php}
                alt=""
              ></img>
            </div>
            <p className=" mt-2 ml-6 font-thin"> {props.desc}</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
