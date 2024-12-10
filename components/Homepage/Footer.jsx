"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowCircleUp,
} from "react-icons/fa";

const Footer = () => {
  const Goup = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-tr from-purple-400 via-cyan-800 to-purple-600 text-gray-300 py-8 px-4">
      {/* Social Media Section */}
      <div className="flex justify-center items-center space-x-4 md:space-x-6 text-lg md:text-xl mb-6 md:mb-8">
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-300 hover:text-blue-400 hover:bg-white rounded-full transition-all duration-200 ease-in-out hover:shadow-md"
        >
          <FaTwitter className="text-3xl md:text-5xl" />
        </Link>
        <span className="text-gray-500 hidden md:inline-block">/</span>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-300 hover:text-blue-700 hover:bg-white rounded-full transition-all duration-200 ease-in-out hover:shadow-md"
        >
          <FaFacebook className="text-3xl md:text-5xl" />
        </Link>
        <span className="text-gray-500 hidden md:inline-block">/</span>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-300 hover:text-purple-800 hover:bg-white rounded-full transition-all duration-200 ease-in-out hover:shadow-md"
        >
          <FaInstagram className="text-3xl md:text-5xl" />
        </Link>
      </div>

      {/* Logo and Tagline Section */}
      <div className="text-center flex flex-col items-center mb-6 md:mb-8">
        <Image
          src="/bflogo.png" // Replace with the actual path to your logo
          alt="Your Logo"
          width={200}
          height={30}
          className="mx-auto  mb-3"
        />
        <span className="text-white text-2xl md:text-4xl font-serif">
          Business Fest24
        </span>
        <button
          onClick={Goup}
          className="p-4 mt-4 rounded-full text-white transition-all hover:scale-110"
        >
          <FaArrowCircleUp className="text-3xl md:text-4xl" />
        </button>
        <span className="text-white text-sm md:text-lg mt-4">
          Proudly Developed by <span className="underline">Mansoor Khan</span> &{" "}
          <span className="underline">Abdullah Shakur</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
