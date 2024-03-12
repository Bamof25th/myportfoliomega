import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row  ml-1 text-white">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            What I have learnt so far
          </p>
          <h2 className={styles.sectionHeadText}>Tech stack.</h2>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
