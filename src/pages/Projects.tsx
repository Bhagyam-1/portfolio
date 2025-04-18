import ProjectsListing from "../components/sections/Projects/ProjectsListing";

const Projects = () => {

    return (
        <section id="projects"
            className="flex flex-col gap-12 items-center p-4 w-full dark:bg-dark-background z-[1]"
            aria-labelledby="projects-heading"
        >
            <h2 id="projects-heading" className="sr-only">My Projects</h2>
            <ProjectsListing />
        </section>
    );
}

export default Projects;