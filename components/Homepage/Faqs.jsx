import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="content w-11/12 mx-auto mt-12 mb-5 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section - Introduction */}
      <div
        data-aos="fade-right"
        className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Frequently Asked Questions about Business Fest
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quia, aspernatur architecto rerum minima omnis blanditiis illo modi
          ullam, error, fugit possimus rem tenetur accusantium!
        </p>
      </div>

      {/* Right Section - FAQs */}
      <div
        data-aos="flip-up"
        className="p-6 lg:w-2/3 bg-white sm:shadow-md md:shadow-none rounded-lg text-gray-900"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-sm md:text-lg">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-sm md:text-lg">
              How do I install it?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              You can install it using npm or yarn by running the appropriate
              command.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-sm md:text-lg">
              Can I customize it?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes, you can customize it using your own styles and
              configurations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
