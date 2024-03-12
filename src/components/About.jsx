import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from './../utils/motion';

const ServiceCard = ({index, title , icon }) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index , 0.75)}
      className='w-full border shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-green-pink-gradient p-[1px] rounded-[20px] ' 
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} 
        className='bg-red-400 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 ' 
        >
          <img src={icon} alt={title} 
           className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroSubText}>Overview.</h2>
      </motion.div>
       
       <motion.p variants={fadeIn("","",0.1,1)}
       className='mt4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Express.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
       </motion.p>
       
       <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service , index) =>(
          <ServiceCard key ={ service.title } index = {index}  {...service}/>
        ))}

       </div>
    </>
  )
}

export default SectionWrapper(About , "about");