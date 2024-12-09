"use client"
import React, {  useState,useEffect} from "react";
import Intro from "@/components/Homepage/Intro";
import WelcomeBfest from "@/components/Homepage/Team";
import Bfesthistory from "@/components/Homepage/Bfesthistory";
import BfestWinners from "@/components/Homepage/BfestWinners";
import Faqs from "@/components/Homepage/Faqs";
import Footer from "@/components/Homepage/Footer";
import Loadertwo from "@/components/loader/Loader";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem("shown")) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      {isLoading && <Loadertwo setLoading={setIsLoading} />} 
      {!isLoading && (
        <div className="content">
          <Intro />
          <Bfesthistory />
          <WelcomeBfest />
          <BfestWinners />
          <Faqs />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Page;
