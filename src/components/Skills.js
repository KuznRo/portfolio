import React from 'react';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaReact  } from 'react-icons/fa';
import {BiLogoJavascript, BiLogoTailwindCss} from 'react-icons/bi'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-800 justify-center items-center'>Skills</p>
          <p className='py-4 text-xl'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-4'>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <FaHtml5  className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <FaCss3Alt className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <BiLogoJavascript className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <FaReact className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <BiLogoTailwindCss className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-lg mt-4 shadow-[#040c16] hover:scale-110 duration-500'>
              <FaNodeJs className='w-20 m-auto flex flex-col justify-center items-center' size={75} />
            <p className='my-4'>Node Js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
