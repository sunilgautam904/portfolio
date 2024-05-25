"use client";
import React from "react";
import {
  FaArrowDown,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaMouse,
  FaTwitterSquare,
} from "react-icons/fa";

/**
 * This component represents the home section of the website. It includes a profile image, a brief introduction, social media icons, and a download resume button.
 */
const Home = () => {
  /**
   * This method creates an anchor element with the URL pointing to the resume PDF file,
   * sets the download attribute to "resume.pdf", appends the anchor element to the document body,
   * triggers a click event on the anchor element to initiate the download, and removes the anchor element
   * from the document body after the download is complete.
   */
  const downloadResume = () => {
    const url = "/images/sunil_Gautam.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Sunil_Gautam.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="text-white bg-240046 py-16">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[25%] flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 md:ml-8">  {/* Added margin-left here */}
              <img
                className="w-full h-full border-2 border-purple-600 rounded-full shadow-lg hover:shadow-xl transform transition duration-300 object-cover"
                src="/images/userProfile.png"
                alt="Sunil Image"
              />
            </div>
          </div>
          <div className="md:w-[50%] text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hello, I'm Sunil
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              I build interactive websites that run across platforms & devices.
              I'm dedicated to staying ahead of the curve and delivering
              cutting-edge solutions that captivate users and drive results.
              With a commitment to clean code, accessibility, and user-centric
              design, I'm ready to take on new challenges and bring your vision
              to life.
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white w-[200px] rounded-md py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={downloadResume}
            >
              Download Resume
            </button>
            <div className="flex items-center p-5 rounded-full">
              <FaMouse className="text-white" />
              <span className="text-white ml-2 mr-4">Scroll Down</span>
              <FaArrowDown className="text-white animate-bounce" />
            </div>
          </div>
          <div className="flex md:flex-col justify-center w-full md:w-auto md:space-y-4 mt-4 md:mb-0">
            <FaFacebookSquare
              className="icon hover:scale-110 hover:text-blue-500"
              size={30}
            />
            <FaInstagram
              className="icon hover:scale-110 hover:text-pink-500"
              size={30}
            />
            <FaTwitterSquare
              className="icon hover:scale-110 hover:text-blue-400"
              size={30}
            />
            <FaGithubSquare
              className="icon hover:scale-110 hover:text-gray-400"
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
