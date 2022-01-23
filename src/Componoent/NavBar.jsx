import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="  text-center inline ">
        {" "}
        <p className="h-16 pt-4 bg-pink-50">
          {" "}
          <a href="/about " className="p-7  underline underline-offset-4 text-sm hover:text-base">
            About {" "}
          </a>
          <a href="/about" className="p-7 underline underline-offset-4 text-sm hover:text-base"> Certification </a>
          <a href="/about" className="p-7 underline underline-offset-4 text-sm hover:text-base"> Contact </a>
        </p>
      </div>
    </>
  );
}
