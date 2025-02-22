import { motion } from "framer-motion";

const AboutDescription = () => {
    return (
        <motion.p
            className="max-w-2xl text-center text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
        >
            Software Engineer with nearly 3 years of experience in building responsive and interactive applications
            using Angular, React, TypeScript, and SCSS. Passionate about crafting intuitive UIs, optimizing workflows,
            and delivering scalable solutions while adhering to Agile methodologies.
        </motion.p>
    )
}

export default AboutDescription;