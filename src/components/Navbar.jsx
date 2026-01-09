import React from "react";
import Search from "/search.png";
import Hanger from "/hanger.svg";
import Logout from "/logout.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
        console.log(window);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex fixed top-0 left-0 w-full transition-transform duration-1000 justify-between items-center p-4 bg-white/20 backdrop-blur-sm text-black ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-1/7 h-12 content flex justify-evenly gap-5 items-center ">
        <div>Collection</div>
        <div>Inspiration</div>
        <div>Guide</div>
      </div>
      <div className="w-4/7 h-12 flex justify-center title items-center text-6xl">
        ATTIRER
      </div>
      <div className="w-1/7 h-12 flex justify-evenly gap-4 items-center ">
        <img className="w-12 h-12" src={Search} alt="Search" />
        <img className="w-5 h-5" src={Hanger} alt="Hanger" />
        <img className="w-5 h-5" src={Logout} alt="Logout" />
      </div>
    </div>
  );
}

export default Navbar;
