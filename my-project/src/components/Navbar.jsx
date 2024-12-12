import React from 'react'
import logo from '../assets/south-sudan.png'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className='mb-14 flex justify-between items-center  lg:px-10'>
      <div className='flex flex-shrink-0 pl-7 lg:pl-0 items-center'>
        <img src={logo} alt='logo' className='w-14 h-14 bg-white rounded-lg' />
      </div>
      <div className='flex m-8 justify-center items-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/sourabh-sharma-ba232128a'><FaLinkedin className="cursor-pointer" /></a>
        <a href='https://github.com/soravvvshrma'><FaGithub className="cursor-pointer" /></a>
        <FaInstagram className="cursor-pointer" />
        <FaSquareXTwitter className="cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar
