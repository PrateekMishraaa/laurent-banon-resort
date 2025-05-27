"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.webp";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-black bg-white z-50 relative">
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="logo" className="h-16 w-auto" />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`
            flex flex-col md:flex-row md:items-center md:gap-8 gap-4 text-sm font-serif uppercase 
            bg-black md:bg-transparent text-white md:text-black w-full md:w-auto absolute md:static 
            left-0 px-6 md:px-0 py-6 md:py-0 transition-all duration-300 ease-in-out 
            ${menuOpen ? "top-20 flex" : "top-[-1000px] md:flex"}
          `}
        >
          <li>
            <a href="/" className="hover:text-[#c19e68]">Laurent and Banon Resort Manali</a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#c19e68]">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c19e68]">Rooms & Suites</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c19e68]">Reservation</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c19e68]">Gallery</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c19e68]">Contact Us</a>
          </li>
          <li>
            <a
              href="#"
              className="h-10 px-4 py-2 border-2 border-white md:border-black hover:bg-[#c19e68] transition-all duration-300 block text-center md:text-black md:hover:text-white md:hover:bg-[#c19e68]"
            >
              Booking Online
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
