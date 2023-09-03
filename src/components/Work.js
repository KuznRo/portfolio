import React from "react";
import landing from "../assets/Landing-photo.png";
import website from "../assets/Website-photo.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-800">
            Work
          </p>
          <p className="py-6 text-xl">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

          {/* Grid Item 1 */}
          <div className="relative">
            <div style={{ backgroundImage: `url(${website})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a href="https://kuznro.github.io/resturant-website/" target='_blank' rel='noopener noreferrer'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0a192f] text-white p-4">
                <p className="text-center">Restaurant website made with <br/> React, Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="relative">
            <div style={{ backgroundImage: `url(${landing})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a href="https://kuznro.github.io/landing-page/" target='_blank' rel='noopener noreferrer'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0a192f] text-white p-4">
                <p className="text-center">Aquarium landing page made with <br /> HTML, CSS, Javascript </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
