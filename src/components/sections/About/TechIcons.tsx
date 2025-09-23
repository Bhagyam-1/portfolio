import { FaReact, FaSass } from "react-icons/fa";
import { SiAngular, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiGit, SiFigma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import React from "react";

const icons = [
  { component: <SiHtml5 className="text-gray-400 group-hover:text-red-500" />, name: "HTML" },
  { component: <SiCss3 className="text-gray-400 group-hover:text-blue-500" />, name: "CSS" },
  { component: <IoLogoJavascript className="text-gray-400 group-hover:text-yellow-400" />, name: "JavaScript" },
  { component: <FaReact className="text-gray-400 group-hover:text-sky-400" />, name: "React" },
  { component: <SiNextdotjs className="text-gray-400 group-hover:text-white" />, name: "Next.js" },
  { component: <RiTailwindCssFill className="text-gray-400 group-hover:text-sky-400" />, name: "Tailwind CSS" },
  { component: <SiAngular className="text-gray-400 group-hover:text-red-500" />, name: "Angular" },
  { component: <SiTypescript className="text-gray-400 group-hover:text-blue-400" />, name: "TypeScript" },
  { component: <FaSass className="text-gray-400 group-hover:text-pink-500" />, name: "Sass" },
  { component: <SiGit className="text-gray-400 group-hover:text-orange-500" />, name: "Git" },
  { component: <SiFigma className="text-gray-400 group-hover:text-purple-400" />, name: "Figma" },
];

const TechCircle = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(128px,_1fr))] 
                    place-items-center gap-4 sm:gap-6 md:gap-8 w-full py-8 sm:py-12 md:py-16">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center 
                     w-20 sm:w-24 md:w-28 h-24 sm:h-28 md:h-32 p-2 sm:p-3 md:p-4 
                     rounded-xl bg-zinc-900 border border-zinc-800 
                     cursor-pointer transition hover:scale-105 hover:border-gray-600 hover:shadow-lg"
        >
          {React.cloneElement(icon.component, {
            className: `${icon.component.props.className} text-3xl sm:text-4xl md:text-5xl transition`
          })}
          <p className="text-center text-xs sm:text-sm md:text-sm text-gray-500 mt-2 sm:mt-3 transition 
                        opacity-0 group-hover:opacity-100 group-hover:text-white h-5">
            {icon.name}
          </p>
        </div>
      ))}
    </div>
  );
};


export default TechCircle;
