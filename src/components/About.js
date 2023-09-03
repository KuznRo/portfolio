import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import coding from '../assets/coding_3.jpg'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-800">
              About
            </p>
            {/* Centered ul on small and medium screens */}
            <ul className="py-8 flex sm:justify-center sm:items-center lg:hidden">
              <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto bg-blue-600" >
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/tre-torrence/" target='_blank' rel='noopener noreferrer'>
                  LinkedIn <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto bg-[#333333]" >
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/KuznRo" target='_blank' rel='noopener noreferrer'>
                  Github <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <img src={coding} alt="pic" />
          </div>
          <div>
            <p className="text-2xl">Hello! I'm Tre`, a passionate software developer with a strong foundation in web technologies and a desire to build meaningful and innovative digital solutions.</p>
            <div className="py-8"></div>
            <p className="text-2xl">My journey in the world of coding has been fueled by my curiosity and fascination with technology. I thrive on challenges and enjoy solving complex problems through elegant and efficient code. I'm dedicated to delivering high-quality solutions that exceed expectations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
