"use client";
import { websiteContent } from "@/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const path = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Inspiration",
      href: "/inspiration",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const homeEl = document.querySelector(".home");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      homeEl?.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      homeEl?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full h-fit flex flex-col gap-6 justify-center items-start">
      <div className="flex justify-start items-center border-white gap-4">
        {websiteContent.about.image.length === 0 && (
          <dsiv className="w-12 h-11 rounded-[4px] bg-white/20" />
        )}

        {websiteContent.about.image.length > 0 && (
          <Image
            src={`/about/${websiteContent.about.image}`}
            alt={websiteContent.about.name}
            width={48}
            height={48}
            className="w-12 h-11 rounded-[4px] bg-white/20"
          />
        )}

        <div className="w-full flex justify-start items-center gap-2">
          <h1 className="text-text-primary text-[24px] font-semibold">
            {websiteContent.about.name}
          </h1>
          <span className="text-text-secondary text-[24px]">aka</span>
          <Link
            target="_blank"
            href={websiteContent.aka.socialHandle}
            className="text-text-primary text-[22px] italic font-semibold lowercase"
          >
            @{websiteContent.aka.value}
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-start items-start">
        <div className="w-full flex justify-start items-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "text-text-secondary text-[16px] hover:text-text-primary relative",
                path === link.href && "text-text-primary",
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 w-full h-[1px] bg-text-secondary",
                  path === link.href ? "opcaity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme cursor-pointer"
          >
            {theme === "dark" ? (
              <LightSVG setTheme={setTheme} theme={theme} />
            ) : (
              <DarkSVG setTheme={setTheme} theme={theme} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const DarkSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={"black"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="lucide lucide-moon-icon lucide-moon"
    >
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
};
const LightSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={"white"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sun-icon lucide-sun"
    >
      <circle cx="12" cy="12" r="4" color="white" />
      <path d="M12 2v2" color="white" />
      <path d="M12 20v2" color="white" />
      <path d="m4.93 4.93 1.41 1.41" color="white" />
      <path d="m17.66 17.66 1.41 1.41" color="white" />
      <path d="M2 12h2" color="white" />
      <path d="M20 12h2" color="white" />
      <path d="m6.34 17.66-1.41 1.41 " color="white" />
      <path d="m19.07 4.93-1.41 1.41" color="white" />
    </svg>
  );
};

export default Navbar;
