"use client";
import Devider from "@/components/ui/Devider";
import { websiteContent } from "@/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ImageHolder from "@/components/ui/ImageHolder";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(4px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-fit gap-6 pr-2"
    >
      {/* About */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {websiteContent.about.details.map((item, idx) => (
          <p key={idx} className="text-[16px] text-left text-text-primary">
            {item}
          </p>
        ))}
      </div>

      <Devider />

      {/* Work */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-start">
          <p className="text-[14px] text-text-secondary uppercase">work</p>
        </div>

        <div className="w-full flex flex-col gap-2 justify-start items-start">
          {websiteContent.work.map((item, idx) => (
            <Link
              href={item.projectLink}
              target="_blank"
              key={idx}
              className="w-full py-2 flex gap-4 justify-start items-center cursor-pointer hover:translate-x-1 transition-all duration-300 ease-in-out"
            >
              <ImageHolder image={`/work/${item.icon}`} />

              <div className="w-fit h-fit flex gap-3 justify-center  items-center">
                <p className="text-[16px] font-semibold text-text-primary">
                  {item.name}
                </p>
                <div className="w-1 h-1 bg-text-secondary" />
                <p className="text-[14px] text-text-secondary">{item.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Devider />

      {/* Experience */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-start">
          <p className="text-[14px] text-text-secondary uppercase">
            Experience
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-start items-start gap-2">
          {websiteContent.experience.map((experience, idx) => (
            <div
              key={idx}
              className="w-[48%] py-4 px-4 flex flex-col gap-4 border border-dotted border-black/10 rounded-md
               justify-start items-start"
            >
              <div className="flex gap-4 justify-center items-center">
                <ImageHolder image={``} />

                <p className="text-[14px] font-semibold text-text-primary">
                  {experience.name}
                </p>
              </div>

              <div className="w-[80%] h-fit flex gap-3 justify-start items-center">
                <p className="text-[14px] text-text-secondary">
                  {experience.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Devider />

      {/* Work with me */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-start">
          <p className="text-[14px] text-text-secondary uppercase">
            Work with me
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 justify-start items-start">
          {websiteContent.workWithMe.map((work, idx) => (
            <Link
              href={work.link}
              target="_blank"
              key={idx}
              className="w-full py-2 flex gap-4 justify-start items-center cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-400 shadow-lg shadow-shadow-primary rounded-[4px] flex justify-center items-center">
                <ImageHolder image={`${work.icon}`} />
              </div>
              <div className="w-fit h-fit flex gap-3 justify-center  items-center">
                <p className="text-[16px] font-semibold text-text-primary">
                  {work.heading}
                </p>
                <div className="w-1 h-1 bg-text-secondary" />
                <p className="text-[14px] text-text-secondary">
                  {work.subheading}
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

export default HomePage;
