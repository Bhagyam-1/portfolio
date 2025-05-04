import { motion } from "framer-motion";
import { aboutDescription } from "../../../utility/constants";
import profile from '../../../assets/profile.webp';

const AboutDescription = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4 }}
            aria-labelledby="about-description"
            className="md:h-[100vh] flex flex-col mt-12 md:flex-row justify-between items-center gap-12 relative">

            <h3 id="about-intro" className="sr-only">My Journey in Tech</h3>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.5 }}
                aria-labelledby="profile-image"
                className="relative h-1/2 min-w-[240px]"
            >
                <img
                    src={profile}
                    alt="A Portrait of Bhagyam Pandey"
                    className="sticky transform top-8 rounded-full h-56 w-60 flex-shrink-0"
                    id="profile-image"
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="251"
                />
            </motion.div>

            <div className="flex flex-col justify-center">
                {
                    aboutDescription.map((description, index) =>
                        <p
                            className="max-w-2xl text-center text-xl text-dark-text-alt mb-2"
                            key={index}
                        >
                            {description}
                        </p>
                    )
                }
            </div>
        </motion.section>
    )
}

export default AboutDescription;