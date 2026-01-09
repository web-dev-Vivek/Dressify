import { useState } from "react";
import Plus from "/plus.svg";

function InfoBucket({ title, title1, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`absolute z-50 w-90 rounded-xl overflow-hidden flex flex-col`}
    >
      <div
        className={`flex w-full p-2 bg-white z-100 justify-between items-center gap-2
        ${open ? "rounded-xl rounded-b-none" : "rounded-xl"}`}
      >
        <p>
          <span className="text-gray-600 text-sm ">{title} </span> {title1}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-400/20 rounded-full h-5 w-5 flex justify-center items-center"
        >
          <img className="w-5 h-5" src={Plus} alt="Plus" />
        </button>
      </div>

      <p
        className={`text-sm text-center bg-white p-2 rounded-xl rounded-t-none
        transition-transform duration-200
        ${open ? "translate-y-0" : "-translate-y-50"}`}
      >
        {description}
      </p>
    </div>
  );
}

export default InfoBucket;
