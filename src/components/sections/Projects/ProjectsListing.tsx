import { motion } from "framer-motion";
import Card from "../../common/Card";
import { projects } from "../../../utility/constants";
import AnimatedLine from "../../animations/AnimatedLine";

const ProjectsListing = () => {
    const MotionCard = motion.create(Card);
    const animatedLineClasses = 'absolute left-4 h-full w-2 rounded-full bg-light-primary-alt dark:bg-dark-secondary-alt h-full flex flex-col items-center gap-16';

    return (
        <section className="relative pl-8 h-fit" aria-labelledby="projects-list-header">
            <h1 id="projects-list-header" className="sr-only">Projects List</h1>
            <AnimatedLine elements={projects} classes={animatedLineClasses} />

            <ul className="flex flex-col gap-16 py-3">
                {
                    projects.map((project, index) =>
                        <li key={project.id}>
                            <MotionCard initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index, duration: 1 }}
                                cardInfo={project}
                                key={project.header}
                            >
                            </MotionCard>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default ProjectsListing;