import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/pages/HomePage/HomePage";
import InspirationPage from "@/components/pages/InspirationPage/InspirationPage";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-fit border-black py-8 home transition-all duration-300 ease-in-out">
      <div className="h-full w-full gap-8 flex flex-col justify-start items-start border-white">
        <InspirationPage />
      </div>
    </div>
  );
};

export default page;
