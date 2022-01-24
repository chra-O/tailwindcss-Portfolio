import React from "react";
import NavBar from "../Componoent/NavBar";
export default function About() {
  return (
    <>
      <NavBar />
      <div className=" sm:grid grid-cols-2 ">
        <div className="mt-20 sm:ml-32 ml-4   ">
          {" "}
          <h1 className="sm:text-6xl text-4xl font-thin mb-6 mt-20  ">
            Chra Othman :
          </h1>{" "}
          <p className="ml-4  text-lg">
            My name is Chra Othman Iam 22 years old , I graduated in computer
            science with a good degree I went to Halkawt highSchool , I got 88
            in 12 , Iam in Sulaymany .{" "}
          </p>
          <div className=" mt-28 ml-16 w-96">
            <div>
              <p className=" text-lg mb-2 ml-4 ">Language : </p>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-64 bg-blue-200  rounded-full">
                  <p className="pl-3">English</p>
                </div>
              </div>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-80  bg-orange-200 rounded-full">
                  <p className="pl-3">Kurdish</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72  bg-green-200 rounded-full">
                  <p className="pl-3">Arabic</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className=" sm:ml-32  mr-20 mt-14">
          {" "}
          <div className=" mt-28 ml-10 w-96">
            <div>
              <p className=" text-lg mb-2 ml-4 ">Language : </p>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-64 bg-blue-200  rounded-full">
                  <p className="pl-3">English</p>
                </div>
              </div>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-80  bg-orange-200 rounded-full">
                  <p className="pl-3">Kurdish</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72  bg-green-200 rounded-full">
                  <p className="pl-3">Arabic</p>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className=" mt-28 ml-10 w-96">
            <div>
              <p className=" text-lg mb-2 ml-4 ">Language : </p>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-64 bg-blue-200  rounded-full">
                  <p className="pl-3">English</p>
                </div>
              </div>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-80  bg-orange-200 rounded-full">
                  <p className="pl-3">Kurdish</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72  bg-green-200 rounded-full">
                  <p className="pl-3">Arabic</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
