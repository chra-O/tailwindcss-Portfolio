import React from "react";

export default function AboutComponent() {
  return (
    <div>
      <div className="grid-cols-1 sm:grid md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 ">
        <div className="mt-20 sm:ml-16 md:ml-56 ml-8">
          {" "}
          <h1 className="sm:text-6xl text-4xl font-thin mb-6 mt-20 ">
            About :
          </h1>{" "}
          <p className="ml-4  text-lg ">
            My name is Chra Othman Iam 22 years old , I graduated in computer
            science with a good degree I went to Halkawt highSchool , I got 88
            in 12 , Iam in Sulaymany .{" "}
          </p>
          <div className="ml-0  sm:ml-8 mt-28  sm:w-96 w-72  ">
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
        <div className=" ml-0 sm:ml-0 md:ml-0  sm:mr-8  mt-14 border-red-100 border-double  border-r-8  ">
          {" "}
          <div className=" mt-28 ml-2 sm:ml-28 w-72 sm:w-96 ">
            <div>
              <p className=" text-lg mb-2 ml-4 ">Web Language : </p>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-80 bg-blue-200  rounded-full">
                  <p className="pl-3">HTML</p>
                </div>
              </div>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72 bg-orange-200 rounded-full">
                  <p className="pl-3">CSS</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-56  bg-green-200 rounded-full">
                  <p className="pl-3">JAVA SCRIPT</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-36  bg-red-200 rounded-full">
                  <p className="pl-3">PHP</p>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className=" mt-24 ml-2 sm:ml-28 sm:w-96 w-72">
            <div>
              <p className=" text-lg mb-2 ml-4 "> Library And Framework : </p>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72 bg-blue-200  rounded-full">
                  <p className="pl-3">Bootstrap</p>
                </div>
              </div>
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-60  bg-orange-200 rounded-full">
                  <p className="pl-3">Bulma</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-80  bg-green-200 rounded-full">
                  <p className="pl-3">React</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72 bg-amber-200 rounded-full">
                  <p className="pl-3">EXPRESS</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-64 bg-blue-100 rounded-full">
                  <p className="pl-3">React Bootstrap</p>
                </div>
              </div>{" "}
              <div className="w-auto bg-stone-100  rounded-full mb-2">
                <div className="w-72 bg-violet-200 rounded-full">
                  <p className="pl-3"> Tailwind CSS</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
