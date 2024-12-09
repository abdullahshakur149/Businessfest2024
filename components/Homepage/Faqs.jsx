import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const Faqs = () => {
    return (
        <div className="content w-10/12 mt-16 mb-5 flex mx-auto">
            <div className="content flex justify-center ">
            <div className="w-6/12">
            <div data-aos="fade-right" className="content w-5/6">
                <h1 className="text-4xl mb-10 font-bold ">Frequently Asked Questions about Business Fest</h1>
                <span className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia, aspernatur architecto rerum minima omnis blanditiis illo modi ullam, error, fugit possimus rem tenetur accusantium!</span>
            </div>
            </div>
            <div data-aos="flip-up" className="p-6 w-6/12  text-gray-900 max-w-4xl mx-auto rounded-lg ">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold text-lg">
                            How do I install it?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            You can install it using npm or yarn by running the appropriate command.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold text-lg">
                            Can I customize it?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            Yes, you can customize it using your own styles and configurations.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            </div>
           
            
        </div>

    );
};

export default Faqs;
