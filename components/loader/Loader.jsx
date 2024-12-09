import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "@/public/bflogo.png";
import "./Loader.css";
import Image from "next/image";

const LoaderTwo = ({ setLoading }) => {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const imageElement = imageRef.current;
    
    // Create GSAP timeline
    let tl = gsap.timeline({ delay: 0.3 });

    if (imageElement) {
      // Initial hidden state for the logo
      gsap.set(imageElement, { opacity: 0, x: "-100vw" });

      // GSAP animation sequence
      tl.to(imageElement, { x: "0vw", opacity: 1, duration: 1, ease: "power4.out" }); // Slide-in animation
    //   tl.to(imageElement, { rotationY: "360deg", scale: 1.5, duration: 0.8, ease: "power4.out" }); // Rotate and scale
      tl.to(imageElement, { opacity: 0, scale: 0.5, duration: 0.5, ease: "power4.in" }); // Fade out

      // Add background transition and delay for main content appearance
      tl.to(".loader-container", { backgroundColor: "#A7A5FA", duration: 0.5 });
      tl.call(() => {
        setTimeout(() => {
          setVisible(false);
          setLoading(false);
          sessionStorage.setItem("shown",true);      
        }, 500);
      });
    }

    return () => {
      tl.kill(); // Cleanup GSAP timeline
    };
  }, [setLoading]);

  if (!visible) {
    return null; // Render nothing if loader is not visible
  }

  return (
    <div className="loader-container bg-white/25 w-full h-full flex flex-col items-center justify-center">
      <Image
        ref={imageRef}
        priority={true}
        className="imge mb-10"
        src={logo}
        width={300}
        alt="Logo"
      />
    </div>
  );
};

export default LoaderTwo;
