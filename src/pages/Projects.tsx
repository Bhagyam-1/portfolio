import { motion } from "framer-motion";
import ProjectsListing from "../components/sections/Projects/ProjectsListing";

const Projects = () => {

    return (
        <section className="p-4 flex flex-col gap-12 items-center" aria-labelledby="projects-header">
            <motion.h1 initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-bold" id="projects-header">My Projects</motion.h1>
            <ProjectsListing />
        </section>
    );
}

export default Projects;