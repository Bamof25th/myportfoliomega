// eslint-disable-next-line no-unused-vars
import React from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { picture_me } from "../assets";
const ContactMe = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-hero-pattern bg-cover rounded-2xl min-h-[600px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>Contact Card</p>
          <h2 className={styles.sectionHeadText}>Me.</h2>
        </motion.div>
        <div className="w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className={` w-full max-h-[300px]  pb-14 flex  gap-7 `}>
            <div className=" p-4 rounded-full   relative hidden sm:flex">
              <img
                className="h-[40vh] cursor-pointer  rounded-full "
                src={picture_me}
                alt="aniket's pic "
              />
            </div>
            <div className="w-full h-96 flex flex-col mx-auto">
              <h1 className=" text-blue-300  mx-auto pr-24 text-6xl xs:text-[8vw] font-semibold ">
                Aniket Baghel
              </h1>
              <br />
              <p className="justify-center sm:mt-5  xs:mt-[-20px] content-center font-mono text-lg sm:line-clamp-6">
                👋 Hi there! I’m Aniket, a passionate developer based in 
                Chattisgarh, India. I am always eager to learn and work on new
                technologies. Feel free to reach out if you have any project or
                just want to I love building things that make an impact
              </p>
            </div>
          </div>
          <div className=" pl-20 flex flex-row gap-7 justify-center items-center ">
            <p>
              Mobile Number :
              <span className="cursor-pointer"> +91 - 7974415736</span>
            </p>
            <p>
              Email :{" "}
              <a className="cursor-pointer hover:underline hover:text-blue-500">
                baghelab1312@gmail.com
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
