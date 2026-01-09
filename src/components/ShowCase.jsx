import { useEffect, useRef, useState } from "react";
import image from "/image.jpg";
import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import image4 from "/image4.jpg";
import image5 from "/image5.jpg";
import image6 from "/image6.jpg";
import image7 from "/image7.jpg";
import image8 from "/image8.jpg";
import image10 from "/image10.png";
import image11 from "/image11.jpg";

function DesignShowcase() {
  const Design = [
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image10,
    image11,
  ];

  const ITEM_WIDTH = 20; // vw
  const BUFFER = 6;

  // 👉 continuously grow hone wali list
  const [slides, setSlides] = useState([...Design]);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => Math.max(0, prev - 1));
  };

  // 👉 near end aaye to aur items add
  useEffect(() => {
    if (index >= slides.length - BUFFER) {
      setSlides((prev) => [...prev, ...Design]);
    }
  }, [index, slides.length, Design]);

  return (
    <div className="relative w-full  overflow-hidden py-5">
      {/* VIEWPORT (padding yahin lagegi) */}
      <div className="px-16 overflow-hidden">
        {/* SLIDER BELT */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * ITEM_WIDTH}vw)`,
          }}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-[20vw]  h-[60vh] flex-shrink-0 p-2">
              <img
                src={src}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2
        w-8 h-8 flex items-center justify-center
        bg-black/60 text-white rounded-full backdrop-blur-sm z-10"
      >
        ←
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2
        w-8 h-8 flex items-center justify-center
        bg-black/60 text-white rounded-full backdrop-blur-sm z-10"
      >
        →
      </button>

      {/* OPTIONAL FADE EDGES (premium look) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f2ed] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f2ed] to-transparent z-10" />
    </div>
  );
}

export default DesignShowcase;
