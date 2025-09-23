import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../../../utility/constants";
import ProjectImage from "./ProjectImages";

interface Project {
    id: string;
    header: string;
    list: string | string[];
    url?: string;
}

const ProjectsListing: React.FC = () => {
    return (
        <div className="space-y-16">
            {projects.map((project: Project) => (
                <section
                    className="shadow-[0_0_52px_-29px_#000000] flex flex-col gap-12 p-8 perspective-[1500px]"
                    key={project.id}
                    aria-labelledby={`project-heading-${project.id}`}
                >
                    <header className="flex gap-4 items-center">
                        <div className="h-[7px] min-w-[12px] bg-red-500 rounded-full shadow-[0_0_20px_10px_rgba(255,0,0,0.2)]"></div>
                        <button
                            title={`Open ${project.header} Project`}
                            type="button"
                            onClick={() => project.url && window.open(project.url, "_blank")}
                        >
                            <h3
                                className={`text-xl p-1 cursor-pointer group ${project.url ? "hover:underline" : ""} flex items-center`}
                                id={`project-heading-${project.id}`}
                            >
                                {project.header}
                                {project.url && <BiLinkExternal className="ml-2 hidden group-hover:inline-block" />}
                            </h3>
                        </button>
                    </header>
                    <p className="max-w-[50vw] text-lg self-end dark:text-zinc-400">
                        {Array.isArray(project.list) ? project.list.join(", ") : project.list}
                    </p>
                    <ProjectImage id={project.id} />
                </section>
            ))}
        </div>
    );
};

export default ProjectsListing;