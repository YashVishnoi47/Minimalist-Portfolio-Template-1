"use client";
import { websiteContent } from "@/content";
import React from "react";
import Link from "next/link";
import Devider from "@/components/ui/Devider";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageHolder from "@/components/ui/ImageHolder";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(4px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-fit flex flex-col gap- pr-2"
    >
      {/* Subheading */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <p className="text-[16px] text-left text-text-primary">
          {websiteContent.contact.subheading}
        </p>
      </div>

      <Devider />

      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-start">
          <p className="text-[14px] text-text-secondary uppercase">Socials</p>
        </div>

        <div className="w-full flex flex-col gap-2 justify-start items-start">
          {websiteContent.Socials.map((work, idx) => (
            <Link
              href={work.link}
              target="_blank"
              key={idx}
              className="w-full py-2 flex gap-4 justify-start items-center cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div className="w-10 h-10 bg-blue-400 shadow-lg shadow-shadow-primary rounded-[4px] flex justify-center items-center">
                <ImageHolder image={`/socials/${work.icon}`} />
              </div>

              <div className="w-fit h-fit flex gap-3 justify-center  items-center">
                <p className="text-[16px] font-semibold text-text-primary">
                  {work.name}
                </p>
                <div className="w-1 h-1 bg-text-secondary" />
                <p className="text-[14px] text-text-secondary">{work.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Devider />

      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-start">
          <p className="text-[14px] text-text-secondary uppercase">Others</p>
        </div>

        <div className="w-full flex flex-col gap-2 justify-start items-start">
          {websiteContent.Socials2.map((work, idx) => (
            <Link
              href={work.link}
              target="_blank"
              key={idx}
              className="w-full py-2 flex gap-4 justify-start items-center cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div className="w-10 h-10 bg-blue-400 shadow-lg shadow-shadow-primary rounded-[4px] flex justify-center items-center">
                <ImageHolder image={`/socials/${work.icon}`} />
              </div>

              <div className="w-fit h-fit flex gap-3 justify-center  items-center">
                <p className="text-[16px] font-semibold text-text-primary">
                  {work.name}
                </p>
                <div className="w-1 h-1 bg-text-secondary" />
                <p className="text-[14px] text-text-secondary">{work.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Devider />
    </motion.div>
  );
};

export default ContactPage;
