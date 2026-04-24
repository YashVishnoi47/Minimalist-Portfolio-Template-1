"use client";
import Devider from "@/components/ui/Devider";
import { websiteContent } from "@/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ImageHolder from "@/components/ui/ImageHolder";

const InspirationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(4px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-fit flex   flex-col gap-6 pr-2"
    >
      {/* Subheading */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <p className="text-[16px] text-left text-text-primary">
          {websiteContent.inspirations.subheading}
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex flex-col gap-2 justify-start items-start">
          {websiteContent.inspirations.ins.map((item, idx) => (
            <Link
              href={item.socialHandle}
              target="_blank"
              key={idx}
              className="w-full py-2 flex gap-4 justify-start items-center cursor-pointer group ease-in-out"
            >
              <div className="w-10 h-10 bg-blue-400 shadow-lg shadow-shadow-primary rounded-[4px] flex justify-center items-center">
                <ImageHolder image={`/inspirations/${item.logo}`} />
              </div>
              <div className="w-fit h-fit flex gap-3 justify-center  items-center">
                <p className="text-[16px] font-semibold text-text-primary">
                  {item.name}
                </p>
                <div className="w-1 h-1 bg-text-secondary" />
                <p className="text-[14px] text-text-secondary group-hover:translate-x-1 transition-all duration-300 group-hover:text-text-primary">
                  {item.about}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Devider />
    </motion.div>
  );
};

export default InspirationPage;
