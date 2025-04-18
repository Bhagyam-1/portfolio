import { FaReact, FaAngular, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";

const icons = [
    { component: <FaReact className="text-3xl" />, angle: 0 },
    { component: <FaAngular className="text-3xl" />, angle: 60 },
    { component: <SiTypescript className="text-3xl" />, angle: 120 },
    { component: <IoLogoJavascript className="text-3xl" />, angle: 180 },
    { component: <RiTailwindCssFill className="text-3xl" />, angle: 240 },
    { component: <FaSass className="text-3xl" />, angle: 300 },
];


const TechCircle = () => {
    return (
        <div>
            <motion.div
                initial={{ rotateZ: 0 }}
                whileInView={{ rotateZ: 360 }}
                transition={{ duration: 2, ease: "linear" }}
                className="relative w-64 h-64 rounded-full mx-auto mt-10 md:m-0">
                {icons.map((icon, index) => {
                    const radius = 100; // Adjust distance from center
                    const centerX = 128;
                    const centerY = 128;
                    const rad = (icon.angle * Math.PI) / 180;

                    const x = centerX + radius * Math.cos(rad) - 24; // 24 = half of icon size (48px)
                    const y = centerY + radius * Math.sin(rad) - 24;

                    return (
                        <motion.div
                            initial={{ rotateZ: 0 }}
                            whileInView={{ rotateZ: 360 }}
                            transition={{ duration: 2, ease: "linear" }}
                            key={index}
                            className="absolute w-12 h-12 rounded-full shadow-md flex items-center justify-center text-xl"
                            style={{ top: `${y}px`, left: `${x}px` }}
                        >
                            {icon.component}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechCircle;
