import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, UserButton } from "@clerk/clerk-react";
import Search from "/search.png";
import Hanger from "/hanger.svg";
import Logout from "/logout.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  // Define search routes
  const searchRoutes = {
    collection: "/collection",
    inspiration: "/inspiration",
    guide: "/guide",
    home: "/",
  };

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

  // Handle Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      // Close search on Escape
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    // Navigate based on search query
    if (query === "collection") {
      navigate("/collection");
    } else if (query === "inspiration") {
      navigate("/inspiration");
    } else if (query === "guide") {
      navigate("/guide");
    } else if (query === "home" || query === "attirer") {
      navigate("/");
    } else {
      alert("Page not found. Try: Collection, Inspiration, Guide, or Home");
    }

    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <div
      className={`flex fixed top-0 z-99 left-0 w-full transition-transform duration-1000 justify-between items-center p-4 bg-white/20 backdrop-blur-sm text-black ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-2/7 h-12 content flex justify-evenly gap-5 items-center ">
        <Link to="/collection" className="hover:text-gray-600 cursor-pointer">
          Collection
        </Link>
        <Link to="/inspiration" className="hover:text-gray-600 cursor-pointer">
          Inspiration
        </Link>
        <Link to="/guide" className="hover:text-gray-600 cursor-pointer">
          Guide
        </Link>
      </div>
      <div className="w-2/7 h-12 flex justify-center title items-center text-6xl">
        <Link to="/" className="hover:text-gray-600 cursor-pointer">
          ATTIRER
        </Link>
      </div>
      <div className="w-2/7 h-12 flex justify-end gap-10 px-5 items-center ">
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 relative"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`border border-gray-300 rounded-md px-3 py-1 transition-all duration-300 ${
              searchOpen ? "w-40 opacity-100" : "w-0 opacity-0 hidden"
            }`}
            placeholder="Search page..."
            autoFocus={searchOpen}
          />
          <div className="relative">
            <img
              onClick={() => setSearchOpen(!searchOpen)}
              onMouseEnter={() => setHoveredIcon("search")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="w-12 h-12 cursor-pointer hover:opacity-70"
              src={Search}
              alt="Search"
            />
            {hoveredIcon === "search" && (
              <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Ctrl+K
              </div>
            )}
          </div>
        </form>

        {/* Show these icons only when user is signed in */}
        {isLoaded && isSignedIn && (
          <>
            <div className="relative">
              <img
                onMouseEnter={() => setHoveredIcon("hanger")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="w-5 h-5 cursor-pointer hover:opacity-70"
                src={Hanger}
                alt="Hanger"
              />
              {hoveredIcon === "hanger" && (
                <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Favorites
                </div>
              )}
            </div>

            {/* Profile Button using Clerk's UserButton */}
            <div className="relative">
              <div
                onMouseEnter={() => setHoveredIcon("profile")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <UserButton afterSignOutUrl="/" />
              </div>
              {hoveredIcon === "profile" && (
                <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Profile
                </div>
              )}
            </div>
          </>
        )}

        {/* Show Logout icon only when user is NOT signed in - this acts as Sign In button */}
        {isLoaded && !isSignedIn && (
          <div className="relative">
            <img
              onClick={() => navigate("/")}
              onMouseEnter={() => setHoveredIcon("logout")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="w-5 h-5 cursor-pointer hover:opacity-70"
              src={Logout}
              alt="Sign In"
            />
            {hoveredIcon === "logout" && (
              <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Sign In
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
