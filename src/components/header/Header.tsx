import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";
import CustomLogo from "../common/CustomLogo";

const Header = () => {
  const [isMdScreen, setIsMdScreen] = useState(Boolean);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Default value of the isTopOfPage will be true, the useEffect will take care of it when the component mounts.
  // If the user is as the top of the page, this means window.scrollY === 0, the background of the header will be transparent and the text white
  // If the window.scrollY > 0, this means the user is no longer at the top of the page, we change the background to white and the text to black
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  function handleResize() {
    const mdMediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMdScreen(mdMediaQuery.matches);
  }

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsTopOfPage(false);
    } else {
      setIsTopOfPage(true);
    }
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Check the isTopOfPage state comment to clarify.
    <header
      className={`fixed z-50 w-full transition-all ${(isMdScreen && !isTopOfPage) || (isMdScreen && isMenuOpen) || (!isTopOfPage && !isMdScreen) ? "logo-border-bottom-color bg-white text-black" : "bg-transparent text-white"} `}
    >
      <nav className={`w-full px-6 transition-all`}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 py-3 md:justify-around ">
          <div className="flex w-full flex-row items-center justify-between ">
            <CustomLogo component="header" />
            {isMdScreen ? (
              <FiMenu
                className={`text-2xl ${isMenuOpen ? "-rotate-90 transition-all" : "rotate-0 transition-all "}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <div className="flex flex-row gap-7 font-medium ">
                <NavLinks setIsMenuOpen={setIsMenuOpen} />
              </div>
            )}
          </div>
          {isMdScreen && isMenuOpen && (
            <div
              className={`flex flex-col items-center gap-4 overflow-hidden font-medium`}
            >
              <NavLinks setIsMenuOpen={setIsMenuOpen} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
