"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NavbarLogo from "@/public/intro.png";
import hoverlogo from "@/public/bflogo.png";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import "./Navbar.css";

const navItems = [
  { pathname: "Home", path: "/" },
  { pathname: "About us", path: "/" },
  { pathname: "History", path: "/" },
];

const Navbar = () => {
  const imageref = useRef(null);
  const hoverref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [path, setPath] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    gsap.set(hoverref.current, { rotateY: -180 });
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onMouseEnter = () => {
    gsap.to(imageref.current, { opacity: 0, duration: 0.5, ease: "power4.out" });
    gsap.to(hoverref.current, { opacity: 1, rotateY: 180, duration: 1, ease: "power4.out" });
  };

  const onMouseLeave = () => {
    gsap.to(hoverref.current, { opacity: 0, rotateY: 360, duration: 1, ease: "power4.out" });
    gsap.to(imageref.current, { opacity: 1, duration: 0.7, ease: "power4.out" });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div   className="w-full">
      <nav
        className={`nav-transition flex items-center justify-between w-full fixed z-20 ${isScrolled ? "backdrop-blur-lg bg-gray-200/50 pt-2" : " rounded-xl "
          } lg:pr-24 lg:pl-16 mx-auto`}
      >
        {/* Navbar Logo */}
        <Link
          href="/"
          className="flex items-center Navbar-logo relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h1
            ref={imageref}
            className="imagee font-serif text-transparent w-44 md:h-10 md:w-64 lg:text-xl xl:text-3xl bg-gradient-to-r from-purple-800 via-cyan-600 to-purple-900 bg-clip-text"
          >
            Business Fest'24
          </h1>
          <Image
            ref={hoverref}
            src={hoverlogo}
            alt="hover-logo"

            className="w-14  imgg  "
          />
        </Link>


        {/* Navbar Auth Button (Desktop) */}
        {!menuOpen && (
          <div className="flex md:order-2 items-center space-x-2 relative">
            {session ? (
              <>
                <button onClick={toggleDropdown} className="bg-gray-800 Btn font-medium text-sm px-4 py-2 hover:bg-gray-700 text-black">
                  Account
                </button>
                {dropdownOpen && (
                  <div className="absolute top-10 bg-gray-100 btnn text-black rounded-lg shadow-lg w-48">
                    <ul className="py-2">
                      <li>
                        <Link href="/profile" className="block px-4 py-2 hover:bg-gray-300">Profile</Link>
                      </li>
                      <li>
                        <button onClick={() => { signOut(); setDropdownOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-300">
                          Logout
                        </button>
                      </li>
                      {session.user.role === "admin" && (
                        <li>
                          <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-300">Dashboard</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <button onClick={signIn} className="bg-gradient-to-r hover:scale-110 text-lg duration-200 transition-all ease-in-out hover:rounded-xl  from-purple-400  to-purple-800 from-pur Btn font-medium  px-7 py-2 hover:from-purple-800  hover:to-purple-400 text-neutral-100">
                  Login
                </button>
              </>
            )}
          </div>
        )}

        {/* Sidebar Toggle Button (Mobile) */}
        {!menuOpen && (
          <button
            type="button"
            className="inline-flex md:hidden items-center w-10 h-10 justify-center text-sm text-black rounded-lg"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <Image src={hoverlogo} alt="menu-toggle" width={40} height={40} />
          </button>
        )}

        {/* Sidebar Menu for Mobile */}
        <div
          className={` fixed top-0 left-0 w-72 z-[9999] h-screen bg-gray-100 text-black transform transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center">
              <Image src={NavbarLogo} alt="navbar-logo" width={220} height={40} />
            </Link>
            <button onClick={toggleMenu} className="text-black">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.pathname} className="py-2">
                <Link href={item.path} className="block px-4 py-2 hover:bg-gray-300 rounded">
                  {item.pathname}
                </Link>
              </li>
            ))}
            <li className="py-2">
              {session ? (
                <>
                  <Link href="/profile" className="block px-4 py-2 my-2 w-full bg-gray-800 hover:bg-gray-700 text-black">Profile</Link>
                  <button onClick={signOut} className="block px-4 py-2 hover:bg-gray-300">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={signIn} className="block px-4 py-2 w-full bg-gray-800 hover:bg-gray-700 rounded text-black">Login</button>
                </>
              )}
            </li>
          </ul>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center md:justify-between md:w-auto md:order-1">
          <ul className="flex flex-col md:flex-row md:space-x-8 lg:space-x-10 md:-translate-x-16">
            {navItems.map((item) => (
              <li key={item.pathname} className="py-4">
                <Link href={item.path}
                  className={`block font-serif   xl:px-4 sm:px-1 ${path === item.path ? "   " : "text-black"} 
                md:py-2 md:text-lg  duration-150 ease-in-out transition-all rounded-lg hover:bg-gradient-to-r from-purple-400    to-purple-300   hover:text-white  p-3  `}>
                  {item.pathname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 h-screen bg-black opacity-50 top-0 left-0 right-0"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
