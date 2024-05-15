import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isMdScreen, setIsMdScreen] = useState(Boolean);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleResize() {
    const mdMediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMdScreen(mdMediaQuery.matches);
  }

  useEffect(() => {
    // When the page refreshes we need to know the initial state of the width.
    // The Event Listener is not enough since will only be active when resize.
    // This condition comes handy to know the initial state of the width.
    const firstScreenSize = window.innerWidth;
    if (firstScreenSize <= 767) {
      setIsMdScreen(true);
    } else {
      setIsMdScreen(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="bg-transparent">
        <div className="mx-auto flex w-full max-w-7xl flex-col  items-center justify-between p-6 text-white md:justify-around">
          <div className="flex w-full flex-row items-center justify-between ">
            <h1 className="text-2xl font-bold xl:text-3xl">PMG</h1>
            {isMdScreen ? (
              <FiMenu
                className={`text-2xl ${isMenuOpen ? "-rotate-90 transition-all" : "rotate-0 transition-all "}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <div className="flex flex-row gap-7 font-medium ">
                <NavLinks />
              </div>
            )}
          </div>
          {isMdScreen && isMenuOpen && (
            <div
              className={`flex  flex-col items-center gap-4 overflow-hidden font-medium transition-all `}
            >
              <NavLinks />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
