import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { logo } from "../assets";
const FooterComp = () => {
  return (
    <footer className="bg-[#230045]  shadow  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Aniket Baghel
            </span>
          </a>
          <ul className=" flex flex-row gap-4 items-center text-sm font-medium  ">
            <li>
              <a
                href="https://github.com/Bamof25th"
                className="hover:underline hover:text-slate-400 me-4 md:me-6 "
              >
                <SiGithub size="2em" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Aniket45661502"
                className="hover:underline hover:text-slate-400 me-4 md:me-6"
              >
                <SiX size="2em" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aniket-baghel-344a93173/"
                className="hover:underline me-4 md:me-6 hover:text-slate-400"
              >
                <SiLinkedin size="2em" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://github.com/Bamof25th" className="hover:underline">
            BAM™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComp;
