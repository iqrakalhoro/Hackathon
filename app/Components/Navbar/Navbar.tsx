"use client"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUserExclamation } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-[#FBEBB5] text-[#000000] lg:p-6">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center lg:justify-center">
        <Navbar/>
        <div className="flex lg:pr-[300px]"></div>
      

        {/* Centered Navigation Links */}
        <div className="hidden lg:flex flex-row space-x-8 text-lg font-medium">
          <a href="#" className="hover:underline">Home</a>
          <Link href="/Shop" className="hover:underline">Shop</Link>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Right Section (Icons) */}
        <div className="flex space-x-6 lg:items-end lg:pl-[80px]">
          <TbUserExclamation className="text-2xl hover:text-gray-700 cursor-pointer" />
          <CiSearch className="text-2xl hover:text-gray-700 cursor-pointer" />
          <IoMdHeartEmpty className="text-2xl hover:text-gray-700 cursor-pointer" />
          <HiOutlineShoppingCart className="text-2xl hover:text-gray-700 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl ml-4 hover:text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 items-center bg-[#FBEBB5] text-lg font-medium py-4">
          <a href="#" className="hover:underline">Home</a>
          <Link href="/Shop" className="hover:underline">Shop</Link>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
