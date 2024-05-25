import React from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaDigitalTachograph,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";

import {
  SiBitbucket,
  SiBootstrap,
  SiGitlab,
  SiGooglemaps,
  SiJest,
  SiJira,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

const techIcons = {
  HTML: <FaHtml5 className="text-red-600 mr-2  text-lg" />,
  CSS: <FaCss3Alt className="text-blue-600 mr-2  text-lg" />,
  Javascript: <FaJsSquare className="text-yellow-500 mr-2  text-lg" />,
  Typescript: <SiTypescript className="text-blue-500 mr-2  text-lg" />,
  "React Js": <FaReact className="text-cyan-500 mr-2 text-lg" />,
  "Next Js": <SiNextdotjs className="text-black mr-2 text-lg" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 mr-2 text-lg" />,
  Bootstrap: <SiBootstrap className="text-purple-600 mr-2 text-lg" />,
  JQuery: <SiJquery className="text-blue-400 mr-2 text-lg" />,
  "SCSS/SASS": <SiSass className="text-pink-400 mr-2 text-lg" />,
  "Node.js": <FaNodeJs className="text-green-600 mr-2 text-lg" />,
  "Express.js": <FaNodeJs className="text-gray-700 mr-2 text-lg" />,
  MongoDB: <SiMongodb className="text-green-500 mr-2 text-lg" />,
  Neo4j: <FaDatabase className="text-blue-600 mr-2 text-lg" />,
  SQL: <FaDatabase className="text-gray-700 mr-2 text-lg" />,
  RTL: <SiTestinglibrary className="text-red-500 mr-2 text-lg" />,
  Jest: <SiJest className="text-red-500 mr-2 text-lg" />,
  Enzyme: <FaTools className="text-gray-600 mr-2 text-lg" />,
  "Ag grid": <FaDatabase className="text-green-600 mr-2 text-lg" />,
  Highcharts: <FaDigitalTachograph className="text-blue-600 mr-2 text-lg" />,
  "Google map": <SiGooglemaps className="text-red-500 mr-2 text-lg" />,
  "Open layer": <SiGooglemaps className="text-blue-600 mr-2 text-lg" />,
  "Vs studio": <SiVisualstudiocode className="text-blue-500 mr-2 text-lg" />,
  "vs code": <SiVisualstudiocode className="text-blue-500 mr-2 text-lg" />,
  Jira: <SiJira className="text-blue-600 mr-2 text-lg" />,
  Bitbucket: <SiBitbucket className="text-blue-500 mr-2 text-lg" />,
  Postman: <SiPostman className="text-orange-500 mr-2 text-lg" />,
  "Git lab": <SiGitlab className="text-orange-600 mr-2 text-lg" />,
  Socket: <FaTools className="text-gray-600 mr-2 text-lg" />,
};

const cards = [
  {
    title: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React Js",
      "Next Js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "JQuery",
      "SCSS/SASS",
    ],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express.js", "Socket"],
  },
  {
    title: "Database",
    technologies: ["MongoDB", "Neo4j", "SQL"],
  },
  {
    title: "Unit Testing",
    technologies: ["RTL", "Jest", "Enzyme"],
  },
  {
    title: "Visualization Library",
    technologies: ["Ag grid", "Highcharts", "Google map", "Open layer"],
  },
  {
    title: "Tools",
    technologies: [
      "Vs studio",
      "vs code",
      "Jira",
      "Bitbucket",
      "Postman",
      "Git lab",
    ],
  },
];

/**
 * This component displays a section showcasing different skills along with their respective icons.
 * @returns {JSX.Element} The JSX element representing the Skills section.
 */
const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 px-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold py-4 text-center">
        Skills
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

/**
 * This component displays a card containing a title and a list of technologies.
 * @param props - The props object.
 * @param props.title - The title of the card.
 * @param  props.technologies - The list of technologies associated with the card.
 * @returns {JSX.Element} The JSX element representing the card.
 */
const Card = ({ title, technologies }: any) => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden text-center p-6 transform transition duration-300 hover:scale-105 hover:bg-purple-900 border-2 border-purple-600">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {technologies.map((tech: any) => (
          <div key={tech} className="flex items-center space-x-2 mr-2 mb-2">
            <span className="inline-flex items-center bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-800 hover:bg-gray-300 transition duration-200">
              {techIcons[tech]}
              {`${tech}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
