import { useState } from "react";
import Closet from "/closet.jpeg";
import Closet1 from "/closet1.jpeg";
import Closet2 from "/closet2.jpeg";
import FemaleStyle from "/FemaleStyle1.jpg";
import MaleStyle from "/MaleStyle.jpg";
import InfoBucket from "../components/Info.jsx";

function Home() {
  const [activeBucket, setActiveBucket] = useState(null);

  return (
    <div>
      {/* Hero scroll left */}
      <div className="flex flex-row overflow-x-scroll">
        <img className="h-screen object-cover" src={Closet} />
        <img className="h-screen object-cover" src={Closet1} />
        <img className="h-screen object-cover" src={Closet2} />
      </div>

      {/* Intro */}
      <div className="bg-[#f5f2ed] md:h-[90vh] flex flex-col p-10 gap-4 justify-center items-center">
        <p className="text-6xl">Lorem, ipsum.</p>
        <p className="text-2xl w-2/3 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Infobuckets */}
      <div className="relative bg-[#f5f2ed] md:h-[70vh] flex px-32 gap-32 justify-center items-center">
        {/* FEMALE */}
        <div className="relative flex items-center gap-6">
          <img
            className="h-[70vh] shadow-xl rounded-3xl object-cover"
            src={FemaleStyle}
          />
          <div className="absolute w-5 h-5 hover:scale-[1.4] transition-transform duration-200 ease bg-white/30 rounded-full flex justify-center items-center top-[28%] left-[55%]">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[18%] left-[60%]">
            <InfoBucket
              id="tonal"
              activeBucket={activeBucket}
              setActiveBucket={setActiveBucket}
              title="TONAL CONTRAST"
              title1="Dark × Light Balance"
              description="Upper and lower tones create a deliberate visual separation.
High contrast combinations feel sharp and confident, while tonal neutrals feel refined and expensive.
This balance controls how structured or soft the outfit appears at first glance."
            />
          </div>
          <div className="absolute w-5 h-5 hover:scale-[1.4] transition-transform duration-200 ease bg-white/30 rounded-full flex justify-center items-center top-[60%] left-[35%]">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[65%] left-[40%]">
            <InfoBucket
              id="silhouette"
              activeBucket={activeBucket}
              setActiveBucket={setActiveBucket}
              title="SILHOUETTE CONTROL"
              title1="Volume vs Structure"
              description="A relaxed upper silhouette is balanced by a structured lower frame.
This contrast preserves a clean human form while maintaining comfort.
True elegance lies in restraint, not excess."
            />
          </div>
        </div>

        {/* MALE */}
        <div className="relative flex items-center gap-6">
          <img
            className="h-[70vh] shadow-xl rounded-3xl object-cover"
            src={MaleStyle}
          />
          <div className="absolute w-5 h-5 hover:scale-[1.4] transition-transform duration-200 ease bg-white/30 rounded-full flex justify-center items-center top-[68%] left-[45%]">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[30%] left-[60%]">
            <InfoBucket
              id="texture"
              activeBucket={activeBucket}
              setActiveBucket={setActiveBucket}
              title="SURFACE CHARACTER"
              title1="Texture Dialogue"
              description="Fabric textures are intentionally contrasted.
A textured knit paired with a smooth base layer adds depth and prevents visual flatness.
Luxury styling is not loud — it’s felt through texture interaction."
            />
          </div>
          <div className="absolute w-5 h-5 hover:scale-[1.4] transition-transform duration-200 ease bg-white/30 rounded-full flex justify-center items-center top-[25%] left-[53%]">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[72%] left-[50%]">
            <InfoBucket
              id="ratio"
              activeBucket={activeBucket}
              setActiveBucket={setActiveBucket}
              title="DETAIL SIGNATURE"
              title1="Hardware & Finish"
              description="Minimal accessories complete the composition.
Leather, metal, and fabric finishes are aligned in tone and temperature, reinforcing cohesion.
In premium design, details never decorate — they confirm intention."
            />
          </div>
        </div>
      </div>

      {/* Related_Pages */}
      <div className="bg-[#f5f2ed] md:h-[50vh] flex flex-col p-10 gap-4 justify-center">
        <p className="text-md md:text-xl">Related Pages</p>
        <div className="flex justify-center gap-3 items-center">
          <div className="bg-white w-[26vw] gap-3 flex p-2 justify-evenly items-center h-[18vh] rounded-lg">
            <img
              className="bg-green-400 w-1/3 rounded-lg h-full"
              src=""
              alt=""
            />
            <div className=" w-2/3 h-full h-full">
              <div className="text-gray-500">Collection</div>
              <div>To Upload your attire </div>
            </div>
          </div>
          <div className="bg-white w-[26vw] gap-3 flex p-2 justify-evenly items-center h-[18vh] rounded-lg">
            <img
              className="bg-green-400 w-1/3 rounded-lg h-full"
              src=""
              alt=""
            />
            <div className=" w-2/3 h-full h-full">
              <div className="text-gray-500">Customer Service</div>
              <div>Frequently Asked Questions</div>
            </div>
          </div>
          <div className="bg-white w-[26vw] gap-3 flex p-2 justify-evenly items-center h-[18vh] rounded-lg">
            <img
              className="bg-green-400 w-1/3 rounded-lg h-full"
              src=""
              alt=""
            />
            <div className=" w-2/3 h-full  h-full">
              <div className="text-gray-500">Guide</div>
              <div>How to Use </div>
            </div>
          </div>
          <div className="bg-white w-[26vw] gap-3 flex p-2 justify-evenly items-center h-[18vh] rounded-lg">
            <img
              className="bg-green-400 w-1/3 rounded-lg h-full"
              src=""
              alt=""
            />
            <div className=" w-2/3 h-full h-full">
              <div className="text-gray-500">Closet</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                ex?{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
