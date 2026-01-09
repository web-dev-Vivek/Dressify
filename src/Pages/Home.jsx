import { React, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Closet from "/closet.jpeg";
import Closet1 from "/closet1.jpeg";
import Closet2 from "/closet2.jpeg";
import FemaleStyle from "/FemaleStyle1.jpg";
import MaleStyle from "/MaleStyle.jpg";
import InfoBucket from "../components/Info.jsx";

function Home() {
  return (
    <div>
      <div className="flex flex-row overflow-x-scroll">
        <img className=" h-screen object-cover " src={Closet} alt="" />
        <img className=" h-screen object-cover " src={Closet1} alt="" />
        <img className=" h-screen object-cover " src={Closet2} alt="" />
      </div>
      <div className="bg-[#f5f2ed] md:h-[90vh] flex flex-col p-10 gap-4 justify-center items-center">
        <p className="text-6xl">Lorem, ipsum.</p>
        <p className="text-2xl w-2/3 max-w-4xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          quia necessitatibus quisquam consequuntur nisi, cupiditate dignissimos
          qui quod amet accusamus culpa nulla omnis voluptatibus, eius
          voluptatem exercitationem doloremque dicta blanditiis, assumenda
          obcaecati soluta! Rerum quia voluptates officia tenetur atque
          distinctio alias molestias cum totam? Dolore?
        </p>
      </div>
      <div className="relative bg-[#f5f2ed] md:h-[90vh] flex p-10 justify-evenly items-center">
        <div className="relative flex justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="shadow-xl bg-[#1c2939] w-20 h-20 rounded-3xl"></div>
            <div className="shadow-xl bg-[#ffffff] w-20 h-20 rounded-3xl"></div>
          </div>
          <div className="">
            <img
              className=" h-[70vh] object-cover rounded-3xl "
              src={FemaleStyle}
              alt=""
            />
          </div>
          <div className="absolute top-[26%] left-[40%] bg-[#ffffff]/30 hover:scale-[1.1] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute  top-[30%] left-[50%] flex justify-end items-start">
            <InfoBucket
              title="SILHOUETTE CONTROL"
              title1="Volume vs. Structure"
              description="A relaxed upper silhouette is balanced by a structured lower frame.
This contrast preserves a clean human form while maintaining comfort.
True elegance lies in restraint, not excess."
            />
          </div>
          <div className="absolute top-[23%] left-[70%] bg-[#ffffff]/30 hover:scale-[1.1] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute  top-[13%] left-[155%] flex justify-end items-start">
            <InfoBucket
              title="TONAL CONTRAST"
              title1="Dark × Light Balance"
              description="Upper and lower tones create a deliberate visual separation.
High contrast combinations feel sharp and confident, while tonal neutrals feel refined and expensive.
This balance controls how structured or soft the outfit appears at first glance."
            />
          </div>
          <div className="absolute top-[68%] left-[40%] bg-[#ffffff]/30 hover:scale-[1.1] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute  top-[73%] left-[110%] flex justify-end items-start">
            <InfoBucket
              title="SILHOUETTE CONTROL"
              title1="Volume vs. Structure"
              description="A relaxed upper silhouette is balanced by a structured lower frame.
This contrast preserves a clean human form while maintaining comfort.
True elegance lies in restraint, not excess."
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="shadow-xl bg-[#ffffff] w-20 h-20 rounded-3xl"></div>
            <div className="shadow-xl bg-[#614631] w-20 h-20 rounded-3xl"></div>
          </div>

          <div className="">
            <img
              className=" h-[70vh] object-cover rounded-3xl "
              src={MaleStyle}
              alt=""
            />
          </div>

          <div className="absolute top-[28%] left-[50%] bg-[#ffffff]/30 hover:scale-[1.1] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute  top-[33%] left-[130%] flex justify-end items-start">
            <InfoBucket
              title="SURFACE CHARACTER"
              title1="Texture Dialogue"
              description="Fabric textures are intentionally contrasted.
A textured knit paired with a smooth base layer adds depth and prevents visual flatness.
Luxury styling is not loud — it’s felt through texture interaction."
            />
          </div>
          <div className="absolute top-[70%] left-[60%] bg-[#ffffff]/30 hover:scale-[1.1] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute  top-[73%] left-[130%] flex justify-end items-start">
            <InfoBucket
              title="PROPORTION HARMONY"
              title1="60–30–10 Color Rule"
              description="For a balanced and refined look, it’s best to follow the 60–30–10 color principle. Use one dominant color (around 60%) to anchor the outfit, a secondary tone (30%) to add depth and contrast, and a subtle accent (10%) to create focus. This approach prevents colors from competing and results in a clean, premium visual harmony."
            />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Home;
