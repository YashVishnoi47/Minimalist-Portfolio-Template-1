import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactPage from "@/components/pages/ContactPage/ContactPage";
import HomePage from "@/components/pages/HomePage/HomePage";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-fit border-black py-8 home transition-all duration-300 ease-in-out">
      <div className="h-full full gap-8 flex flex-col justify-start items-start border-white">
        <ContactPage />
      </div>
    </div>
  );
};

export default page;
