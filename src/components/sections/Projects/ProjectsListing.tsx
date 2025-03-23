import { projects } from "../../../utility/constants";
import ProjectImage from "./ProjectImages";

interface Project {
    id: string;
    header: string;
    list: string | string[];
}

const ProjectsListing: React.FC = () => {
    return (
        <div className="space-y-16">
            {projects.map((project: Project) => (
                <section
                    className="shadow-[0_0_52px_-29px_#929292] flex flex-col gap-12 p-8 perspective-[1500px]"
                    key={project.id}
                    aria-labelledby={`project-heading-${project.id}`}
                >
                    <header className="flex gap-4 items-center">
                        <div className="h-[7px] w-[12px] bg-red-500 rounded-full shadow-[0_0_20px_10px_rgba(255,0,0,0.2)]"></div>
                        <h3 className="text-xl" id={`project-heading-${project.id}`}>
                            {project.header}
                        </h3>
                    </header>
                    <p className="max-w-[50vw] text-lg self-end">
                        {Array.isArray(project.list) ? project.list.join(", ") : project.list}
                    </p>
                    <ProjectImage id={project.id} />
                </section>
            ))}
        </div>
    );
};

export default ProjectsListing;