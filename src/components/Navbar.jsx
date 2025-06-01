import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      {/* desktop navbar */}
      <div className="hidden md:flex justify-between mx-6">
        <div className="my-3">
          <h2 className="text-xl font-bold leading-7">indie Space</h2>
        </div>
        <div className="my-3">
          <ul className="flex justify-center gap-5">
            <li className="leading-4 text-[12px] cursor-pointer">News</li>
            <li className="leading-4 text-[12px] cursor-pointer">Opinion</li>
            <li className="leading-4 text-[12px] cursor-pointer">Technology</li>
            <li className="leading-4 text-[12px] cursor-pointer">Our Planet</li>
            <li className="leading-4 text-[12px] cursor-pointer">
              Health and Science
            </li>
          </ul>
        </div>
        <div className="my-3">
          <button className="border border-2xl leading-4 text-[12px] px-4 py-2 h-[32px] rounded-3xl">
            Sign up for our newsLetter
          </button>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="md:hidden flex justify-between items-center mx-6 py-3">
        <h2 className="text-xl font-bold leading-7">indie Space</h2>
        <button className="text-bold text-2xl" onClick={toggleMenu}>
          { isMenuOpen ? <HiX /> : <HiMenu /> }
        </button>
      </div>
      {/* menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-black">indie Space</h2>
        </div>
        <ul className="p-4 space-y-4 text-black ">
          <li className="py-2 leading-4 text-[12px] cursor-pointer">News</li>
          <li className="py-2 leading-4 text-[12px] cursor-pointer">Opinion</li>
          <li className="py-2 leading-4 text-[12px] cursor-pointer">
            Technology
          </li>
          <li className="py-2 leading-4 text-[12px] cursor-pointer">
            Our Planet
          </li>
          <li className="py-2 leading-4 text-[12px] cursor-pointer">
            Health and Science
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
