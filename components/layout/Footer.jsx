import { websiteContent } from "@/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <p className="font-great-vibes text-text-primary text-[28px]">YASH</p>
      <div className="w-full flex flex-col gap-2 justify-center    items-center">
        <p className="text-[14px] text-text-secondary">
          Crafted by Yash Vishnoi. Feel free to check it out.
        </p>
        <p className="text-[14px] text-text-secondary">
          Appreciate you stopping by
        </p>
      </div>
    </div>
  );
};

export default Footer;
