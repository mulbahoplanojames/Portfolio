"use client";

import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { Navlinks } from "@/data/navdata";

const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const handleDownload = () => {
    const pdfUrl = "/OplanoResume.pdf";

    // Create a temporary link
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "OplanoResume.pdf");
    link.setAttribute("target", "_blank");
    link.style.display = "none";

    // Add to document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className=" flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 bg-gradient-to-r from-primary1 via-secondary1 to-secondary1 text-white">
        <Link
          to="/"
          className="text-2xl font-bold flex justify-center items-center gap-2  md:w-16 md:h-16 w-10 h-10 rounded-md relative"
        >
          <Image src="/assets/logo.png" alt="logo" className="" fill />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {Navlinks.map((navlink) => (
            <li key={navlink.label} className="inline-block px-8">
              <Link
                to={navlink.path}
                className="font-montserrat text-base leading-normal cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*//! Contact Us button */}
        <div className="lg:gap-x-6 gap-x-4 flex items-center justify-center">
          <a
            href="/OplanoResume.pdf"
            download="OplanoResume.pdf"
            className="py-2 lg:px-4 px-3 border-none shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-sm lg:text-base rounded-3xl hover:opacity-50 bg-primary1 text-white"
            onClick={(e) => {
              // Prevent default if you want to handle it programmatically
              e.preventDefault();
              handleDownload();
            }}
          >
            Download Resume
          </a>
          {/*//! Menu toggle button for smaller devices */}
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer `}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-primary1 fixed top-16 bottom-0 left-0 right-0 z-[9999999] ">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden  gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {Navlinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    to={navlink.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
              <a
                href="/OplanoResume.pdf"
                download="OplanoResume.pdf"
                className="py-2 lg:px-4 px-3 border-none shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-sm lg:text-base rounded-3xl hover:opacity-50 bg-white text-primary1"
                onClick={(e) => {
                  // Prevent default if you want to handle it programmatically
                  e.preventDefault();
                  handleDownload();
                }}
              >
                Download Resume
              </a>
            </ul>
          </nav>
        </div>
      )}

      <button
        className="bg-white w-14 h-14 rounded-full fixed bottom-[3rem] md:right-12 right-6 z-50 flex justify-center items-center cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <FaArrowCircleUp className="text-4xl" />
      </button>
    </>
  );
};

export default Navbar;
