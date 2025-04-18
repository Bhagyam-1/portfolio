import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const Resume = () => {
    return (
        <>
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                title="Resume"
                href="/BhagyamResume.pdf"
                download="BhagyamResume.pdf"
                className="flex items-center gap-2 mx-5 p-1 rounded-full inline-flex text-2xl  dark:hover:bg-dark-text dark:hover:text-dark-background"
            >
                <FaUserCircle />
            </motion.a>
        </>
    )
}

export default Resume;