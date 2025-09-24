import TechIcons from "./TechIcons";
import { motion } from "framer-motion";

const AboutContent = () => {
    const text = "Skills".split("");
    return (
        <section
            aria-labelledby="about-content" className="flex">
            <h3 id="about-values" className="sr-only">My Approach & Vision</h3>
            <div className="inline-block w-full">
                <motion.p
                    className="text-4xl text-zinc-400 font-bold pb-2 inline-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    {
                        text.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.2,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))
                    }
                </motion.p>

                {/* Animate border after text appears */}
                <motion.div
                    className="border-b-2 border-dark-grey"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: text.length * 0.2, duration: 0.6 }}
                />

                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ delay: (text.length) * 0.2, duration: 0.6 }}
                    className="w-full"
                >
                    <TechIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default AboutContent;