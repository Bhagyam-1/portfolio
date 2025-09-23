import { FaReact, FaSass } from "react-icons/fa";
import { SiAngular, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiGit, SiFigma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const icons = [
  { component: <SiHtml5 className="text-5xl text-gray-400 group-hover:text-red-500" />, name: "HTML" },
  { component: <SiCss3 className="text-5xl text-gray-400 group-hover:text-blue-500" />, name: "CSS" },
  { component: <FaReact className="text-5xl text-gray-400 group-hover:text-sky-400" />, name: "React" },
  { component: <SiAngular className="text-5xl text-gray-400 group-hover:text-red-500" />, name: "Angular" },
  { component: <SiTypescript className="text-5xl text-gray-400 group-hover:text-blue-400" />, name: "TypeScript" },
  { component: <IoLogoJavascript className="text-5xl text-gray-400 group-hover:text-yellow-400" />, name: "JavaScript" },
  { component: <RiTailwindCssFill className="text-5xl text-gray-400 group-hover:text-sky-400" />, name: "Tailwind CSS" },
  { component: <FaSass className="text-5xl text-gray-400 group-hover:text-pink-500" />, name: "Sass" },
  { component: <SiNextdotjs className="text-5xl text-gray-400 group-hover:text-white" />, name: "Next.js" },
  { component: <SiGit className="text-5xl text-gray-400 group-hover:text-orange-500" />, name: "Git" },
  { component: <SiFigma className="text-5xl text-gray-400 group-hover:text-purple-400" />, name: "Figma" },
];

const TechCircle = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(128px,_1fr))] place-items-center gap-16 w-full py-16">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center w-28 h-32 p-4 rounded-xl bg-zinc-900 border border-zinc-800 
                     cursor-pointer transition hover:scale-105 hover:border-gray-600 hover:shadow-lg"
        >
          {icon.component}
          <p className="text-sm text-gray-500 mt-2 transition 
                        opacity-0 group-hover:opacity-100 group-hover:text-white h-5">
            {icon.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechCircle;
