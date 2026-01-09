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
      {/* Hero scroll */}
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

      {/* Styles */}
      <div className="relative bg-[#f5f2ed] md:h-[70vh] flex px-32 gap-32 justify-center items-center">
        {/* FEMALE */}
        <div className="relative flex items-center gap-6">
          <img
            className="h-[70vh] rounded-3xl object-cover"
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
              description="Upper and lower tones create visual separation. High contrast feels sharp, tonal balance feels refined."
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
              description="A relaxed upper paired with a structured lower maintains balance and elegance."
            />
          </div>
        </div>

        {/* MALE */}
        <div className="relative flex items-center gap-6">
          <img className="h-[70vh] rounded-3xl object-cover" src={MaleStyle} />
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
              description="Contrasting textures add depth and prevent a flat appearance."
            />
          </div>

          <div className="absolute top-[72%] left-[50%]">
            <InfoBucket
              id="ratio"
              activeBucket={activeBucket}
              setActiveBucket={setActiveBucket}
              title="PROPORTION HARMONY"
              title1="60–30–10 Rule"
              description="A dominant base, secondary contrast, and subtle accent ensure visual harmony."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
