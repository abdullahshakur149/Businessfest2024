import Image from "next/image";
import React from "react";
import picture from "@/public/bflogo.png";

const Bfesthistory = () => {
  return (
    <div className="w-full mx-auto text-center bg-gradient-to-br from-purple-300 via-cyan-200 to-purple-500 p-10 pt-16 rounded-xl rounded-t-none">
      {/* Welcome Tagline */}
      <span
        data-aos="fade-right"
        className="px-5 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm md:text-base"
      >
        Welcome to Business Fest'24
      </span>

      {/* Main Heading */}
      <h1
        data-aos="zoom-in"
        className="mt-10 mb-6 font-semibold font-helvetica text-black text-2xl md:text-4xl lg:text-5xl px-4"
      >
        Uniting Visionaries, Innovators, and Leaders for Business Excellence
      </h1>

      {/* Supporting Tagline */}
      <span
        data-aos="fade-right"
        className="text-gray-600 text-sm md:text-base lg:text-lg px-4"
      >
        Join us at Business Fest'24 <br /> to explore groundbreaking ideas,
        network with industry leaders, and unlock the future of innovation.
      </span>

      {/* Content Section */}
      <div
        data-aos="fade-right"
        className="content flex flex-col lg:flex-row justify-center mt-10"
      >
        {/* Left Column - Image */}
        <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
          <Image
            src={picture}
            className="object-cover w-full p-4"
            alt="cover"
          />
        </div>

        {/* Right Column - Event Highlights */}
        <div
          data-aos="fade-up"
          className="w-full lg:w-6/12 my-auto text-start px-4"
        >
          <div className="content-2 w-full lg:w-4/6">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-helvetica mb-7">
              Learn, Connect, and Thrive at Business Fest'24
            </h1>
            <span className="text-sm md:text-base">
              Discover cutting-edge business strategies, hear from leading
              experts across industries, and gain actionable insights to
              elevate your organization. Be part of engaging sessions on design
              thinking, marketing trends, leadership, and more.
            </span>
          </div>

          {/* Event Details */}
          <div
            data-aos="fade-up"
            className="content-2 flex flex-col sm:flex-row mt-16 gap-8"
          >
            <div className="event flex flex-col space-y-2 items-center sm:items-start">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">
                07
              </span>
              <span className="text-base md:text-lg lg:text-xl font-bold">
                Days of Insights
              </span>
            </div>
            <div className="event flex flex-col space-y-2 items-center sm:items-start">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-500/70 to-purple-700 bg-clip-text text-transparent">
                20+
              </span>
              <span className="text-base md:text-lg lg:text-xl font-bold">
                Industry Experts
              </span>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <button
            data-aos="fade-up"
            className="bg-gradient-to-r md:flex hidden mt-10 hover:scale-110 text-sm md:text-lg lg:text-xl duration-200 transition-all ease-in-out rounded-xl from-purple-400 to-purple-800 Btn font-medium px-6 md:px-8 lg:px-10 py-2 md:py-3 hover:from-purple-800 hover:to-purple-400 text-neutral-100"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bfesthistory;
