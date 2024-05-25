"use client";
import React from "react";

/**
 * This components displays a section containing project details and links.
 * @returns {JSX.Element} The JSX element representing the Projects section.
 */
const Projects = () => {
  return (
    <div id="projects" className="w-full  py-16 px-4 bg-[#240046]">
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold my-4 text-center">
        Projects
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8">
        <div className="w-full shadow-xl bg-[#3c096c] flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/hexagon.jpg"}
            alt="Hexagon"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Smart Build
          </h2>
          <div className="text-center font-medium text-white">
            <p className="py-2 border-b border-gray-400 mx-8 mt-8">
              Lorem Ipsum is simply{" "}
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              HxGN Smart Build® Insight is a cloud based SAAS solution designed
              especially for the AEC industry, connecting the office and the
              field throughout the building design and construction process.
            </p>
          </div>
          <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#240046] hover:bg-purple-400 transition duration-300">
            Visit
          </button>
        </div>
        <div className="w-full shadow-xl bg-[#3c096c] flex flex-col p-6 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/fsensina.png"}
            alt="Fs Ensina"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Fs Ensina
          </h2>
          <div className="text-center font-medium text-white">
            <p className="py-2 border-b border-gray-400 mx-8 mt-8">
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
          <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#240046] hover:bg-purple-400 transition duration-300">
            Visit
          </button>
        </div>
        <div className="w-full shadow-xl bg-[#3c096c] flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-full shadow-md"
            src={"images/triple.png"}
            alt="Triple"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            App Development
          </h2>
          <p className="text-center text-4xl font-bold text-white">$149</p>
          <div className="text-center font-medium text-white">
            <p className="py-2 border-b border-gray-400 mx-8 mt-8">
              Lorem Ipsum is simply{" "}
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b border-gray-400 mx-8">
              Lorem Ipsum is simply dumm.
            </p>
          </div>
          <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#240046] hover:bg-purple-400 transition duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
