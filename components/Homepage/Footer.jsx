"use client"
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
    const Goup = ()=>{
        window.scroll({
            top:0,behavior:"smooth"
        })
    }
  return (
    <footer className="bg-gradient-to-tr from-purple-400 via-cyan-800 to-purple-600 text-gray-300 py-8">
      {/* Social Media Section */}
      <div className="flex justify-center items-center space-x-6 text-xl mb-8">
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className=" cursor-pointer text-blue-300 hover:text-blue-400 hover:bg-white duration-200 ease-in-out transition-all rounded-full hover:shadow-md p-2 text-5xl" />
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-300 hover:text-blue-700 hover:bg-white duration-200 ease-in-out transition-all rounded-full hover:shadow-md p-2 text-5xl cursor-pointer " />
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-blue-300 hover:text-purple-800 hover:bg-white duration-200 ease-in-out transition-all rounded-full hover:shadow-md p-2 text-5xl cursor-pointer" />
        </Link>
        
        
        
      </div>

      {/* Logo Section */}
      <div className="text-center flex flex-col mb-8">
        <Image
          src="/bflogo.png" // Replace with the actual path to your logo
          alt="Your Logo"
          width={100}
          height={40}
          className="mx-auto"
        />
        <span className="text-white text-5xl font-serif ps-4">Business Fest'24</span>
        
        <button onClick={Goup} className="ml-auto p-10 pb-0">
            <FaArrowCircleUp className="text-4xl"/></button>
            <span className="text-white text-xl font-serif ps-4">Developed da shpe by <span className="underline">suprastar</span> ao <span className="underline">suprabang</span></span>
      </div>

      {/* Navigation Links */}
      {/* <div className="flex justify-between items-center max-w-4xl mx-auto px-4 text-sm">
        <div className="flex space-x-6">
          <Link href="#work" className="hover:text-white">
            Work
          </Link>
          <Link href="#story" className="hover:text-white">
            Story
          </Link>
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="#careers" className="hover:text-white">
            Careers
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact Us
          </Link>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
