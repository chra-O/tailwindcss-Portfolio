import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="   sm:inline grid-cols-4   sm:grid   bg-rose-50">
        <p className=" pt-4  text-center  ">
          {" "}
          <Link
            to="/"
            className="p-4 underline underline-offset-4 text-sm hover:text-base  ease-in duration-200 "
          >
            Home
          </Link>{" "}
          <Link
            to="/About"
            className="p-4 underline underline-offset-4 text-sm hover:text-base ease-in duration-200  "
          >
            About
          </Link>{" "}
          <Link
            to="/Cetification"
            className="p-4 underline underline-offset-4 text-sm hover:text-base ease-in duration-200 "
          >
            Cetification
          </Link>{" "}
          <Link
            to="/Contact"
            className="p-4 underline underline-offset-4 text-sm hover:text-base ease-in duration-200 "
          >
            Contact
          </Link>{" "}
        </p>
        <p></p>
        <p></p>
        <p className="h-16 pt-4   text-center  ">
          <img
            className="inline bm:text-xs w-12 pr-4  "
            alt=""
            //https://cdn-icons-png.flaticon.com/512/3524/3524737.png
            src="https://cdn-icons-png.flaticon.com/512/3524/3524755.png"
          ></img>
          <a href="https://github.com/chra-O">
            <img
              className="inline bm:text-xs w-8 sm:w-10 pr-2 "
              alt=""
              //https://cdn-icons-png.flaticon.com/512/2111/2111612.png
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            ></img>
          </a>
        </p>
      </div>
    </>
  );
}
