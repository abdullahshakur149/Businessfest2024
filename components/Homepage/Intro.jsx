"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import hero from "@/public/intro.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
const Intro = () => {
  const targetDate = new Date("2024-12-18T00:00:00"); // Event Date (December 18th, 2024)
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeLeft());

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false
    })
  }, [])

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Time's up
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  if (!timeRemaining) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">The event has started!</h1>
        </div>
      </div>
    );
  }

  return (
    <div >
      <Navbar />
      <div data-aos="zoom-in" className="pt-20">
        <Image
          src={hero}
          className="object-cover w-full h-auto"
          alt="hero cover"
        />
      </div>

      <div className="clock mx-auto flex bg-gradient-to-tr from-purple-100    p-16 justify-center shadow-md rounded-xl rounded-b-none shadow-neutral-100 w-12/12 ">
        <div className="flex space-x-52  text-center">
          {/* Days */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-24 text-center m-5">
            <p className="text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">{timeRemaining.days}</p>
            <p className="text-lg font-bold">Days</p>
          </div>

          {/* Hours */}
          <div  data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-24 text-center m-5">
            <p className="text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">{timeRemaining.hours}</p>
            <p className="text-lg font-bold">Hours</p>
          </div>

          {/* Minutes */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-24 text-center m-5">
            <p className="text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">{timeRemaining.minutes}</p>
            <p className="text-lg font-bold">Minutes</p>
          </div>

          {/* Seconds */}
          <div  data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-24 text-center m-5">
            <p className="text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">{timeRemaining.seconds}</p>
            <p className="text-lg font-bold">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
