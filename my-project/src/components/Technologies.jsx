import React from 'react'
import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { motion } from "motion/react"

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 p-8">
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-6">
        <motion.div  
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
        <RiHtml5Line className="text-4xl text-orange-600"/>
        </motion.div >
        <motion.div  
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
        <RiCss3Line className="text-4xl text-blue-400"/>
        </motion.div>
        <motion.div  
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
         className=" rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavascriptLine className="text-4xl text-yellow-400"/>
        </motion.div >
        <motion.div  
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-4xl text-cyan-400"/>
        </motion.div  >
        <motion.div  
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className=" rounded-2xl border-4 border-neutral-800 p-4">
        <SiRedux className="text-4xl text-purple-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
