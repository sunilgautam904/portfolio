import {
  FaCss3Alt,
  FaDatabase,
  FaDigitalTachograph,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";

import {
  SiBabel,
  SiBitbucket,
  SiBootstrap,
  SiConfluence,
  SiGitlab,
  SiGooglemaps,
  SiJest,
  SiJira,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVisualstudiocode,
  SiWebpack,
  SiYarn,
} from "react-icons/si";

const techIcons = {
  HTML: <FaHtml5 className="text-red-600 mr-2 text-lg" />,
  CSS: <FaCss3Alt className="text-blue-600 mr-2 text-lg" />,
  Javascript: <FaJsSquare className="text-yellow-500 mr-2 text-lg" />,
  Typescript: <SiTypescript className="text-blue-500 mr-2 text-lg" />,
  "React Js": <FaReact className="text-cyan-500 mr-2 text-lg" />,
  "Next Js": <SiNextdotjs className="text-black mr-2 text-lg" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 mr-2 text-lg" />,
  "Material UI": <FaTools className="text-gray-600 mr-2 text-lg" />,
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
  GitHub: <FaGithub className="text-gray-800 mr-2 text-lg" />,
  Docker: <FaDocker className="text-blue-500 mr-2 text-lg" />,
  Webpack: <SiWebpack className="text-blue-400 mr-2 text-lg" />,
  Babel: <SiBabel className="text-yellow-500 mr-2 text-lg" />,
  NPM: <SiNpm className="text-red-600 mr-2 text-lg" />,
  Yarn: <SiYarn className="text-blue-600 mr-2 text-lg" />,
  Confluence: <SiConfluence className="text-blue-600 mr-2 text-lg" />,
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
      "GitHub",
      "Docker",
      "Webpack",
      "Babel",
      "NPM",
      "Yarn",
      "Confluence",
    ],
  },
];

/**
 * This component displays a section showcasing different skills along with their respective icons.
 * @returns {JSX.Element} The JSX element representing the Skills section.
 */
const Skills = (): JSX.Element => {
  return (
    <div id="skills" className="w-full pt-16 px-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-extrabold py-4 text-center leading-10">
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
    <div className="rounded-lg shadow-lg overflow-hidden text-center p-4 md:p-6 transform transition duration-300 hover:scale-105 bg-gradient-to-r from-[#f7f7f7] to-[#cdc5c5cc] border []">
      <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {technologies.map((tech: any) => (
          <div key={tech} className="flex items-center space-x-1 md:space-x-2 mr-1 md:mr-2 mb-1 md:mb-2">
            <span className="inline-flex items-center bg-[#e0e0e0] rounded-full p-1 md:p-2 text-xs md:text-sm font-semibold text-gray-800 hover:bg-gray-400 hover:text-white transition duration-200">
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
