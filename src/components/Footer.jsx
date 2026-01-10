import React from "react";

function Footer() {
  return (
    <div className="bg-[#beb4a1] md:h-[90vh]">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl content text-gray-600/60 font-bold ">
          JOIN OUR STYLE COMMUNITY
        </h2>
        <p className="text-5xl title text-center">
          Have a question or need styling guidance?
          <br /> Reach out for personalized suggestions and informed design
          direction.
        </p>
        <div className="flex mt-20 w-full justify-center items-center flex-col gap-1 mt-4">
          <p className="text-start w-1/3 text-gray-600 title">E-MAIL ADDRESS</p>
          <input
            type="text"
            className="bg-white/30 content px-5 text-sm w-1/3 rounded-md h-10"
            placeholder="Enter your email address. Our team reach out to you shortly."
          />
        </div>
        <div className="flex justify-end w-1/3 ">
          <button className="bg-gray-600/50  w-1/4 text-white px-4 py-2 rounded-full content mt-4">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
