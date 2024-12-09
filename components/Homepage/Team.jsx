import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const WelcomeBfest = () => {

  
  const Teams = [
    {
      name: "Stella Smith",
      designation: "Eventor Live Max",
      image: "/bflogo.png", // Replace with actual image URL
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
    {
      name: "John Doe",
      designation: "Business Innovator",
      image: "/bflogo.png", // Replace with actual image URL
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
    {
      name: "Jane Doe",
      designation: "Creative Director",
      image: "/bflogo.png", // Replace with actual image URL
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
    {
      name: "Michael Smith",
      designation: "Marketing Expert",
      image: "/bflogo.png", // Replace with actual image URL
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="content text-center">
        <span className="px-5 py-1 bg-purple-100 text-purple-700 rounded-lg">
          Meet our Experts, and speakers
        </span>
        <h1 className="mt-6 mb-10 font-semibold font-helvetica text-black text-5xl">
          Learn from Industry Leaders
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Teams.map((member, index) => (
            <div data-aos="fade-up"
              key={index}
              className="relative overflow-hidden rounded-xl bg-white shadow-lg group"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name} data-aos="flip-left"
                className="object-cover w-full h-80 rounded-xl"
              />

              {/* Social Media Icons */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                <div className="flex justify-center mt-32 space-x-4 text-white">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>

              {/* Name and Designation */}
              <div className="text-center p-4">
                <h2 className="text-lg font-bold">{member.name}</h2>
                <p className="text-gray-500">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBfest;
