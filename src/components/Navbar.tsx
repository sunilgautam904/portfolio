"use client";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/globals.css";

/**
 * This component represents the navigation bar of the website. It includes navigation links
 * to different sections of the website, a responsive sidebar menu for mobile devices, and functionality
 * to handle scrolling to sections and toggling the sidebar menu.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const sidebarRef = useRef(null);

  /**
   * This method toggles the visibility of the sidebar menu.
   */
  const handleSideBarMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * This method Scrolls to the specified section of the page smoothly.
   * @param sectionId - The ID of the section to scroll to.
   */
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  /**
   * This will listens for clicks outside the sidebar menu to close it.
   */
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef?.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1
          className="w-full text-3xl font-bold text-[white]"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          sg.
        </h1>

        <ul className="hidden md:flex">
          <li className="p-4">
            <button
              className="text-lg hover:text-purple-600"
              onClick={() => handleScroll("home")}
            >
              Home
            </button>
          </li>
          <li className="p-4">
            <button
              className="text-lg hover:text-purple-600"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </button>
          </li>
          <li className="p-4">
            <button
              className="text-lg hover:text-purple-600"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </button>
          </li>
          <li className="p-4">
            <button
              className="text-lg hover:text-purple-600"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
        <div onClick={handleSideBarMenu} className="block md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
      </div>
      <ul
        ref={sidebarRef}
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#240046] ease-in-out duration-500 z-50 md:hidden"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#240046] ease-in-out duration-500 z-50 md:hidden"
        }
      >
        <li className="p-4 border-b border-gray-600">
          <button
            className="text-lg text-white hover:text-purple-600"
            onClick={() => handleScroll("home")}
          >
            Home
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button
            className="text-lg text-white hover:text-purple-600"
            onClick={() => handleScroll("skills")}
          >
            Skills
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button
            className="text-lg text-white hover:text-purple-600"
            onClick={() => handleScroll("cards")}
          >
            Projects
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button
            className="text-lg text-white hover:text-purple-600"
            onClick={() => handleScroll("about")}
          >
            About
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
