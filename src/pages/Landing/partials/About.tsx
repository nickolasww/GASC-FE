import React from 'react'
// @ts-ignore
import gdsc from "../../../assets/gdsc.svg"

const About = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      <div className='flex'> 
        <div className='w-2/3 flex flex-col gap-6 justify-center items-center h-screen z-10'> 
        <h1 className='text-5xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text'>
          What is GASC ??
        </h1>
        <p className='w-1/2 text-lg text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur dolores a nulla vel debitis laudantium facilis magnam dignissimos? Vitae accusamus recusandae dolores error quasi? Odio veniam sed ducimus reprehenderit!
        </p>
        </div>
        <div className=''> 
          <img src={gdsc} alt="GDSC Logo" className='' />
        </div>
      </div>
    </div>
  )
}

export default About
