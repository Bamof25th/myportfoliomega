// eslint-disable-next-line no-unused-vars
import React from "react";
import { textVariant } from "../utils/motion";
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>Contact Card</p>
          <h2 className={styles.sectionHeadText}>Me.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `}
      ></div>
    </div>
  );
};

export default ContactMe;
