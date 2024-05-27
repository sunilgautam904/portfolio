"use client";
import React from "react";

/**
 * This component displays a section containing project details and links.
 * @returns {JSX.Element} The JSX element representing the Projects section.
 */
const Projects = () => {
  return (
    <div id="projects" className="w-full pt-4 px-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-bold my-4 text-center py-6 font-extrabold">
        Projects
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8">
        <div className="w-full shadow-xl bg-gradient-to-r from-[#f7f7f7] to-[#cdc5c5cc] border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/hexagon.jpg"}
            alt="Hexagon"
          />
          <h2 className="text-2xl font-bold text-center py-2 text-black">
            Smart Build
          </h2>
          <div className="text-center font-medium text-black">
            <p className="py-2 border-b border-gray-400 mx-8 mt-2">
              AEC Project Viewer
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              HxGN Smart Build® Insight is a cloud based SAAS solution designed
              especially for the AEC industry, connecting the office and the
              field throughout the building design and construction process.
            </p>
          </div>
          <button className="bg-[#8B55B0] hover:bg-purple-700 text-white w-[200px] my-4 mx-auto px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Visit
          </button>
        </div>
        <div className="w-full shadow-xl bg-gradient-to-r from-[#f7f7f7] to-[#cdc5c5cc] border flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/fsensina.png"}
            alt="Fs Ensina"
          />
          <h2 className="text-2xl font-bold text-center py-2 text-black">
            Fs Ensina
          </h2>
          <div className="text-center font-medium text-black">
            <p className="py-2 border-b border-gray-400 mx-8 mt-2">
              ENSINA by FS
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              Fs ensina is an innovative app for busy individuals seeking
              personal and professional growth. Offering quick, non-degree
              courses taught by top industry instructors, it allows flexible
              learning anytime, anywhere. Perfect for launching a business,
              boosting income, or advancing a career, ENSINA seamlessly
              integrates education into daily life.
            </p>
          </div>
          <button className="bg-[#8B55B0] hover:bg-purple-700 text-white w-[200px] my-4 mx-auto px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => window.open('https://fsensina.com.br/#/', '_blank')}>
            Visit
          </button>
        </div>
        <div className="w-full shadow-xl bg-gradient-to-r from-[#f7f7f7] to-[#cdc5c5cc] border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/hexagon.jpg"}
            alt="Hexagon"
          />
          <h2 className="text-2xl font-bold text-center py-2 text-black">
            Smart Build
          </h2>
          <div className="text-center font-medium text-black">
            <p className="py-2 border-b border-gray-400 mx-8 mt-2">
              AEC Project Viewer
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              HxGN Smart Build® Insight is a cloud based SAAS solution designed
              especially for the AEC industry, connecting the office and the
              field throughout the building design and construction process.
            </p>
          </div>
          <button className="bg-[#8B55B0] hover:bg-purple-700 text-white w-[200px] my-4 mx-auto px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
