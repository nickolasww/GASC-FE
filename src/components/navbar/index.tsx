import React from 'react'
// @ts-ignore
import Logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3'>
      <div className='text-white text-2xl font-bold'> 
        <img src={Logo} alt='Logo' className='w-15 h-15 inline-block mr-2' /> 
      </div>
        <ul className='flex gap-4 font-semibold text-gray-500'>
            <li className='hover:text-red-600'>Home</li>
            <li className='hover:text-blue-600'>About</li>
            <li className='hover:text-green-600'>Privay Policy</li>
            <li className='hover:text-yellow-600'>Settings</li>
        </ul>
    </div>
  )
}

export default Navbar
