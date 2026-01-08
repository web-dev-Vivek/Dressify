import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import Closet from "/closet.jpeg";
import Closet1 from "/closet1.jpeg";
import Closet2 from "/closet2.jpeg";
import FemaleStyle from "/FemaleStyle1.jpg";
import MaleStyle from "/MaleStyle.jpg";

function Home() {
  // const boxRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(boxRef.current, {
  //     x: -100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
  // }, []);
  return (
    <div>
      <div className="flex overflow-x-scroll">
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
      <div className="bg-[#f5f2ed] md:h-[90vh] flex p-10 justify-evenly items-center">
        <div className="relative flex justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-[#1c2939] w-20 h-20 rounded-3xl"></div>
            <div className="bg-[#ffffff] w-20 h-20 rounded-3xl"></div>
          </div>
          <div className="">
            <img
              className=" h-[70vh] object-cover rounded-3xl "
              src={FemaleStyle}
              alt=""
            />
          </div>
          <div className="absolute top-10 left-90 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-10 left-90 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-10 w-40 rounded-full flex justify-center items-center">
            <p>Tonal Contrast</p>
          </div>
          <div className="absolute top-20 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-40 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-50 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
        </div>
        <div className="relative flex justify-center items-center gap-4">
          <div className="">
            <img
              className=" h-[70vh] object-cover rounded-3xl "
              src={MaleStyle}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-[#ffffff] w-20 h-20 rounded-3xl"></div>
            <div className="bg-[#614631] w-20 h-20 rounded-3xl"></div>
          </div>
          <div className="absolute top-0 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-20 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-40 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
          <div className="absolute top-50 bg-[#ffffff]/30 hover:scale-[1.3] transition-transform ease duration-200 left-0 h-5 w-5 rounded-full flex justify-center items-center">
            <div className="bg-[#ffffff] rounded-full h-3 w-3"></div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Home;
