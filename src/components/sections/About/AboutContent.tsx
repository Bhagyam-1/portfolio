import { motion } from "framer-motion";
import { aboutContent } from "../../../utility/constants";
import TechIcons from "./TechIcons";

const AboutContent = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4 }}
            aria-labelledby="about-content" className="md:h-[100vh] flex flex-col md:flex-row justify-between items-center gap-12 relative">
            <h3 id="about-values" className="sr-only">My Approach & Vision</h3>
            <TechIcons />
            <div className="flex flex-col justify-center">
                {
                    aboutContent.map((content, index) =>
                        <p
                            className="max-w-2xl text-center text-xl text-dark-text-alt mb-2"
                            key={index}
                        >
                            {content}
                        </p>
                    )
                }
            </div>
        </motion.section>
    )
}

export default AboutContent;