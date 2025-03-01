import { motion } from "framer-motion";
import { aboutDescription } from "../../../utility/constants";

const AboutDescription = () => {
    return (
        <>
            {
                aboutDescription.map((description, index) =>
                    <motion.p
                        className="max-w-2xl text-center text-lg mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        key={index}
                    >
                        {description}
                    </motion.p>
                )
            }
        </>
    )
}

export default AboutDescription;