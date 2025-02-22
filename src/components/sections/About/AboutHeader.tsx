import { motion } from "framer-motion";

const AboutHeader = () => {
    return (
        <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            About Me
        </motion.h1>
    )
}

export default AboutHeader;