import { motion } from "framer-motion";
import { aboutDescription } from "../../../utility/constants";
import profile from '../../../assets/profile.webp';

const AboutDescription = () => {
    return (
        <motion.section
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            aria-labelledby="about-description"
            className="md:h-[100vh] flex flex-col mt-12 md:flex-row justify-between items-center gap-12 relative">

            <h3 id="about-intro" className="sr-only">My Journey in Tech</h3>

            <div className="relative">
                <div className="hanging-image"></div>
                <motion.div
                    className="perspective-card relative z-[4] bg-gradient-to-br from-[#151414] to-[#151414] shadow-[0_0_7px_1px_rgba(0,0,0,0.35)] h-92 rounded-[10px]"
                    whileInView={{
                        rotateX: [0, -10, 6, 0],
                        scale: [1, 1.02, 0.99, 1], // subtle scale to counter perspective shrink
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: 1,
                    }}
                    style={{ transformOrigin: "top center", perspective: 800 }}
                >
                    <div className="profile-container">
                        <div className="absolute top-3 left-9 h-2 w-2 rounded-full bg-dark-grey" />
                        <div className="absolute top-3 right-9 h-2 w-2 rounded-full bg-dark-grey" />
                        <img
                            src={profile}
                            alt="A Portrait of Bhagyam Pandey"
                            className="transform h-64 w-64 flex-shrink-0 rounded-[0px_0px_90%_0px]"
                            id="profile-image"
                            loading="lazy"
                            decoding="async"
                            width="240"
                            height="251"
                        />
                    </div>
                    <div className="p-4">
                        <p className="text-xl font-bold text-zinc-400">Bhagyam Pandey</p>
                        <p className="text-md text-dark-grey">Frontend Developer</p>
                    </div>
                </motion.div>

            </div>

            <div className="flex flex-col justify-center">
                {
                    aboutDescription.map((description, index) =>
                        <p
                            className="max-w-2xl text-center text-xl text-zinc-400 mb-2"
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