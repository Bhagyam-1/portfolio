import { motion } from "framer-motion";
import Card from "../../common/Card";
import { experiences, skills } from "../../../utility/constants";

const AboutCards = () => {
    const MotionCard = motion.create(Card);
    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            aria-labelledby="about-cards-heading"
        >
            <h2 id="about-cards-heading" className="sr-only">
                My Skills and Experience
            </h2>
            {
                [skills, experiences].map((cardContent) =>
                    <MotionCard
                        initial={{ scale: 0.6 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        cardInfo={cardContent}
                        key={cardContent.id}
                    />
                )
            }
        </motion.section>
    )
}


export default AboutCards;