import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="   sm:inline   h-full sm:grid sm:grid-cols-2  bg-rose-50  ">
        <p className=" pt-4  text-center  ">
          {" "}
          <Link
            to="/"
            className="p-2 underline underline-offset-4 text-sm hover:text-base  ease-in duration-200 "
          >
            Home
          </Link>{" "}
          <Link
            to="/About"
            className="p-2 underline underline-offset-4 text-sm hover:text-base ease-in duration-200  "
          >
            About
          </Link>{" "}
          <Link
            to="/Cetification"
            className="p-2 underline underline-offset-4 text-sm hover:text-base ease-in duration-200 "
          >
            Work
          </Link>{" "}
          <Link
            to="/Contact"
            className="p-2 underline underline-offset-4 text-sm hover:text-base ease-in duration-200 "
          >
            Contact
          </Link>{" "}
          <Link
            to="/Certification"
            className="p-2 underline underline-offset-4 text-sm hover:text-base ease-in duration-200 "
          >
            Certification
          </Link>{" "}
        </p>
{/*  */}
        <div className="h-16 pt-4   text-center  ">
          <a href="https://github.com/chra-O">
            <img
              className="inline w-8 sm:w-8 pr-2  ml-2"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            ></img>
          </a>
          <a href="https://codepen.io/chra-A/pens/popular">
            <img
              className="inline  w-8 sm:w-8 pr-2 ml-2 "
              alt=""
              src="  https://cdn-icons-png.flaticon.com/128/2111/2111341.png"
            ></img>
          </a>
          <a href="https://developers.google.com/profile/u/chra-Othman">
           <p className="font-bold inline ml-2  ">GDG</p>
          </a>
        </div>
      </div>
    </>
  );
}
