import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import "./navbar.css"


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=' flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
          <li className=' links mr-6 relative cursor-pointer'>Home</li>
          <li className=' links mr-6 relative whitespace-nowrap cursor-pointer'>Sign In</li>
          <li className=' links mr-6 relative cursor-pointer'>About</li>
          <li className=' links mr-6 relative cursor-pointer'>Contact</li>
        </ul>

    <div className="block md:hidden cursor-pointer " onClick={handleNav} >
      {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
    </div>


   <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1>
      <ul className='p-4 uppercase '>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Sign In</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar