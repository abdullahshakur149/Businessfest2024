"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const BfestWinners = () => {
  // Sample data for winners
  const winners = [
    {
      title: "John Doe",
      category: "Best Business Pitch",
      src: "/bflogo.png", // Replace with actual image URL
      content: "John presented an innovative solution for sustainable energy.",
    },
    {
      title: "Jane Smith",
      category: "Top Innovator",
      src: "/bflogo.png", // Replace with actual image URL
      content: "Jane's AI-driven solution reshaped the e-commerce landscape.",
    },
   
    {
      title: "Sarah Johnson",
      category: "Best Team Collaboration",
      src: "/bflogo.png", // Replace with actual image URL
      content:
        "Sarah's team displayed unmatched collaboration and project execution.",
    },
  ];

  return (
    <div className="mt-24 w-11/12 mx-auto text-center">
      {/* Section Heading */}
      <div data-aos="fade-right" className="mb-5">
        <h2 className="text-5xl  font-bold text-purple-700">Winners of Bfest'24</h2>
        <p className="text-gray-600 mt-2">
          Celebrating the best ideas, innovations, and leadership at Business
          Fest.
        </p>
      </div>

      {/* Carousel */}
      <Carousel 
        items={winners.map((winner, index) => (
          <Card  key={index} card={winner} index={index} layout={true} />
        ))}
      />
    </div>
  );
};

export default BfestWinners;
