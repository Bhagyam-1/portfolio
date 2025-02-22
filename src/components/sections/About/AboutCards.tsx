import { motion } from "framer-motion";
import Card from "../../common/Card";
import { experiences, skills } from "../../../utility/constants";

const AboutCards = () => {
    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            <Card>
                <h2 className="text-xl font-semibold text-dark-primary dark:text-light-text">Skills</h2>
                <ul className="list-disc list-inside">
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
            </Card>

            <Card>
                <h2 className="text-xl font-semibold text-dark-primary dark:text-light-text">Experience</h2>
                <div className="flex flex-col gap-2">
                    {experiences.map((experience) => <p key={experience}>{experience}</p>)}
                </div>
            </Card>
        </motion.section>
    )
}

export default AboutCards;