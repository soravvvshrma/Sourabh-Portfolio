import React from 'react'
import img from '../assets/ProfilePic.jpg'
import { HERO_CONTENT } from '../constants'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div  className="flex items-center flex-col lg:items-start">
                        <motion.h1 
                        initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                        className="pb-10 text-[2.8rem] lg:text-7xl font-thin tracking-tight lg:mt-16">Sourabh Sharma</motion.h1>
                        <motion.span 
                          initial={{x: -100, opacity: 0}}
                          animate={{x: 0, opacity: 1}}
                          transition={{duration: 1, delay: 0.7}}
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl text-3xl  tracking-tight text-transparent">Front End Developer</motion.span>
                        <motion.p 
                          initial={{x: -100, opacity: 0}}
                          animate={{x: 0, opacity: 1}}
                          transition={{duration: 1, delay: 1}}
                          className=" max-w-xl py-4 font-light tracking-tighter">{HERO_CONTENT} </motion.p >
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                     src={img} alt='img'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
