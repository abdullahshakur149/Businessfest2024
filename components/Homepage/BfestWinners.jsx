"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const BfestWinners = () => {
  // Sample data for winners
  const winners = [
    {
      title: "Team Cloo",
      category: "Best Business Pitch",
      src: "/team1.jpeg",
      content: "John presented an innovative solution for sustainable energy.",
    },
    {
      title: "Team Bits",
      category: "Top Innovator",
      src: "/team2.jpeg",
      content: "Jane's AI-driven solution reshaped the e-commerce landscape.",
    },
    {
      title: "Team Unique Gem",
      category: "Best Team Collaboration",
      src: "/team3.jpeg",
      content:
        "Sarah's team displayed unmatched collaboration and project execution.",
    },
  ];

  return (
    <div className="mt-28 w-11/12 mx-auto text-center">
      {/* Section Heading */}
      <div data-aos="fade-right" className="mb-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-purple-700">
          Winners of Bfest24
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">
          Celebrating the best ideas, innovations, and leadership at Business
          Fest.
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel-container relative">
        <Carousel
          items={winners.map((winner, index) => (
            <Card
              key={index}
              card={winner}
              index={index}
              layout={true}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto"
            />
          ))}
        />
      </div>
    </div>
  );
};

export default BfestWinners;
